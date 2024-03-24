<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\task;
use Illuminate\Support\Facades\Hash;
use \Imagick;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class GeneralController extends Controller
{
    public function register(Request $request)
    {
         $data=$request->validate([
        'fname'=>'',
        'lname'=>'',
        'username'=>'unique:users',
        'email'=>'unique:users',
        'phone'=>'unique:users|min:10',
        'password'=>'confirmed|min:4',
        'referral_code'=>'',
        ]);
    
    /*
        $fl =strtoupper(substr($request->username, 0, 1));
        $draw = new \ImagickDraw();
        $draw->setFontSize(30);
        $draw->setFillColor('blue');
        $draw->setTextAlignment(\Imagick::ALIGN_CENTER);
        $draw->annotation(35, 45, $fl);
        $imagick = new \Imagick();
        $imagick->newImage(70, 70, '#d7f0ff');
        $imagick->setImageFormat("png");
        $imagick->drawImage($draw);
        $imagick->writeImages('public/profiles/'.$request->username.'.png', false);
  */
        $avatar=$request->username.'.png';
        
        $user= User::create([
          'fname'=>$request->fname,
          'lname'=>$request->lname,
          'phone'=>$request->phone,
          
          'email'=>$request->email,
          
          'username'=>$request->username,
          'referral_code'=>'',
          'password'=>Hash::make($request->password),
          'avatar'=>$avatar,
          
        ]);
        
        
        
         if(Auth::check())
          {
            Auth::logout();
          }


      if (!empty($user->id)) {


        $user_data = array(
            'phone'  => \request()->get('phone'),
            'password' => \request()->get('password')
        );

      if(Auth::attempt($user_data))
      {
          return redirect('/u/dashboard');
      }
      else
      {
          return redirect()->back();
      }

       
      }
        
      
    }
    
    public function changePassword(Request $request){
        $user = auth()->user();
    if (Hash::check($request->previous_password, $user->password)) {
        if($request->password1 == $request->password2)
        {
        $newPassword = Hash::make($request->password1);
        $user->password = $newPassword;
        $user->save();
         $data=[
            'success'=>'saved',
            ];
        return response()->json($data);
        }
        else
        {
           $data=[
            'input_error'=>'password2',
            'errors'=>'Your password does not match',
            ];
        return response()->json($data);  
        }
    } else {
        $data=[
            'input_error'=>'previous-password',
            'errors'=>'Incorrect old password',
            ];
        return response()->json($data);
    }
    }
    
    public function editUsers(Request $request)
    {
        
  
    $userFind=User::where('email','=',$request->email)->first();
    $userPhone=User::where('phone','=',$request->id)->first();
    $phone=User::where('phone','=',$request->phone)->first();
    if(empty($phone))
    {
    if(empty($userFind))
    {
    if(empty($request->password))
    {
    $user=User::where('id','=',$request->id)->update(['money_out'=>$request->money_out,'money_in'=>$request->money_in,'phone'=>$request->phone,'email'=>$request->email,'balance'=>$request->balance,'username'=>$request->username,]);
    }
    else
    {
        $user=User::where('id','=',$request->id)->update(['money_out'=>$request->money_out,'money_in'=>$request->money_in,'phone'=>$request->phone,'password'=>Hash::make($request->password),'email'=>$request->email,'balance'=>$request->balance,'username'=>$request->username,]);
    }
    return redirect('/u/view/users');
    }
     else
    {
        
        
        if(empty($request->password))
    {
    $user=User::where('id','=',$request->id)->update(['money_out'=>$request->money_out,'money_in'=>$request->money_in,'phone'=>$request->phone,'balance'=>$request->balance,'username'=>$request->username,]);
    }
    else
    {
        $user=User::where('id','=',$request->id)->update(['money_out'=>$request->money_out,'money_in'=>$request->money_in,'phone'=>$request->phone,'password'=>Hash::make($request->password),'balance'=>$request->balance,'username'=>$request->username,]);
    }
        
        
        if($userFind->email!=$request->email)
    {
        return redirect()->back()->with('email','Email already in use by another user');
    }
    else
    {
       return redirect('/u/view/users');
    }
    }
    }
   
    else
    {
     if(empty($userFind))
    {
    if(empty($request->password))
    {
    $user=User::where('id','=',$request->id)->update(['money_out'=>$request->money_out,'money_in'=>$request->money_in,'email'=>$request->email,'balance'=>$request->balance,'username'=>$request->username,]);
    }
    else
    {
        $user=User::where('id','=',$request->id)->update(['money_out'=>$request->money_out,'money_in'=>$request->money_in,'password'=>Hash::make($request->password),'email'=>$request->email,'balance'=>$request->balance,'username'=>$request->username,]);
    }
    return redirect('/u/view/users');
    }
     else
    {
        
        
        if(empty($request->password))
    {
    $user=User::where('id','=',$request->id)->update(['money_out'=>$request->money_out,'money_in'=>$request->money_in,'balance'=>$request->balance,'username'=>$request->username,]);
    }
    else
    {
        $user=User::where('id','=',$request->id)->update(['money_out'=>$request->money_out,'money_in'=>$request->money_in,'password'=>Hash::make($request->password),'balance'=>$request->balance,'username'=>$request->username,]);
    }
        
        
        if($userFind->email!=$request->email)
    {
        return redirect()->back()->with('email','Email already in use by another user');
    }
    else
    {
       return redirect('/u/view/users');
    }
    }    
        
    
    return redirect('/u/view/users');
    }
    }
    
    
    
    
    public function userUpdate(Request $request)
{
    $user = User::find(\Auth::User()->id);

    // Validate the input
    $validator = Validator::make($request->all(), [
        'first_name' => 'required',
        'last_name' => 'required',
        'email' => 'required|unique:users,email,'.$user->id,
        'phone' => 'required|unique:users,phone,'.$user->id,
        'username' => 'required|unique:users,username,'.$user->id,
        // Other fields validation
    ]);
    
   $fieldErrors = [];  
   if ($validator->fails()) {
        $errors = $validator->getMessageBag()->toArray();

        $fieldErrors = [];
        foreach ($errors as $field => $messages) {
            $fieldErrors[$field] = $messages;
        }
      return response()->json($fieldErrors);

   }
    
    if($request->hasFile('avatar'))
    {
        $file = $request->file('avatar');
        $fileName = $file->getClientOriginalName(); // get the original name of the file
        $file->move(public_path('static/img/profiles'), $fileName); // save the file to the public/uploads folder
        $filename='/profiles/'.$fileName;
        

    }
    else
    {
       $filename=\Auth::User()->avatar; 
    }
    
   
    // Update the user record
    $user->fname = $request->input('first_name');
    $user->lname = $request->input('last_name');
    $user->email = $request->input('email');
    $user->phone = $request->input('phone');
    $user->username = $request->input('username');
    $user->avatar=$filename;
    // Other fields update
 
    $user->save();  
     
    $data=[ 
            'success'=>'saved',
            'avatar_url'=>'/public/static/img'.$filename,
            ];
    return response()->json($data);
}

    
     public function editUserProfile(Request $request)
    {
        
  
    $userFind=User::where('email','=',$request->email)->first();
    $userPhone=User::where('phone','=',$request->id)->first();
    $phone=User::where('phone','=',$request->phone)->first();
    if(empty($phone))
    {
    if(empty($userFind))
    {
    if(empty($request->password))
    {
    $user=User::where('id','=',$request->id)->update(['names'=>$request->names,'phone'=>$request->phone,'email'=>$request->email,'balance'=>$request->balance,'username'=>$request->username,]);
    }
    else
    {
        $user=User::where('id','=',$request->id)->update(['names'=>$request->names,'phone'=>$request->phone,'password'=>Hash::make($request->password),'email'=>$request->email,'username'=>$request->username,]);
    }
    return redirect()->back()->with('success','Your profile was edited successfully');
    }
     else
    {
        
        
        if(empty($request->password))
    {
    $user=User::where('id','=',$request->id)->update(['names'=>$request->names,'phone'=>$request->phone,'balance'=>$request->balance,'username'=>$request->username,]);
    }
    else
    {
        $user=User::where('id','=',$request->id)->update(['names'=>$request->names,'phone'=>$request->phone,'password'=>Hash::make($request->password),'username'=>$request->username,]);
    }
        
        
        if($userFind->email!=$request->email)
    {
        return redirect()->back()->with('email','Email already in use by another user');
    }
    else
    {
        return redirect()->back()->with('success','Your profile was edited successfully');
    }
    }
    }
   
    else
    {
     if(empty($userFind))
    {
    if(empty($request->password))
    {
    $user=User::where('id','=',$request->id)->update(['names'=>$request->names,'email'=>$request->email,'username'=>$request->username,]);
    }
    else
    {
        $user=User::where('id','=',$request->id)->update(['names'=>$request->names,'password'=>Hash::make($request->password),'email'=>$request->email,'username'=>$request->username,]);
    }
    return redirect()->back()->with('success','Your profile was edited successfully');
    }
     else
    {
        
        
        if(empty($request->password))
    {
    $user=User::where('id','=',$request->id)->update(['names'=>$request->names,'username'=>$request->username,]);
    }
    else
    {
        $user=User::where('id','=',$request->id)->update(['names'=>$request->names,'password'=>Hash::make($request->password),'username'=>$request->username,]);
    }
        
        
        if($userFind->email!=$request->email)
    {
        return redirect()->back()->with('email','Email already in use by another user');
    }
    else
    {
        return redirect()->back()->with('success','Your profile was edited successfully');
    }
    }    
        
    
     return redirect()->back()->with('success','Your profile was edited successfully');
    }
    }
    
    
    
    public function login(Request $request)
    {

      $this->validate($request, [
          'email'   => 'required',
          'password'  => 'required|min:4'
      ]);

$user=\App\Models\User::where('email','=',$request->email)->first();
if($user)
{

        $user_data = array(
            'email'  => $request->get('email'),
            'password' => $request->get('password')
        );

       

        if(Auth::attempt($user_data))
        {
           return redirect('/u/dashboard');
        }
        else
        {
          
        
         return back()->with('error', 'wrong password');
          
        }
}
else
{
         return back()->with('error', 'Email could not found');
   
}

  }
    
    
    
    public function addTasks(Request $request)
    {
        $data = Validator::make($request->all(),[
        'paper_type'=>'',
        'subject'=>'',
        'cpp'=>'required',
        'nature'=>'',
        'pay_date'=>'required',
        'end_date'=>'required',
        'amount'=>'required',
        'description'=>'required',
        'account'=>'required',
        'pages'=>'',
        'attachments'=>''
        ]);
        
        
        if ($data->fails()){
             $data=[
            'errors'=>'please ensure all the fields are filled with correct data!',
            ];
        return response()->json($data);
        }
        
        $filePaths = [];
         $files = request()->file('attachments');
            if($files)
            {
            $bid=task::find($request->input('id'));
            $oldFilePaths = json_decode($bid->attachments, true);
            
                foreach ($oldFilePaths as $path) {
                    if (\File::exists(public_path('attachments/'.$path))) {
                        \File::delete(public_path('attachments/'.$path));
                    }
                }


            
            foreach($request->file('attachments') as $file)
            {
               
                
               
                $fileName = $file->getClientOriginalName(); // get the original name of the file
                $file->move(public_path('attachments'), $fileName); // save the file to the public/uploads folder
                
                array_push($filePaths, $fileName);


               
            }
            
             $task=task::create([
        'paper_type'=>$request->input('paper_type'),
        'subject'=>$request->input('field'),
        'cpp'=>$request->input('cpp'),
        'nature'=>$request->input('nature'),
        'pay_date'=>$request->input('pay_date'),
        'end_date'=>$request->input('end_date'),
        'amount'=>$request->input('amount'),
        'description'=>$request->input('description'),
        'account'=>$request->input('account'),
        'pages'=>$request->input('pages'),
        'attachments'=>json_encode($filePaths)
        ]);
            }
            else
            {
                $task=task::create([
        'paper_type'=>$request->input('paper_type'),
        'subject'=>$request->input('field'),
        'cpp'=>$request->input('cpp'),
        'nature'=>$request->input('nature'),
        'pay_date'=>$request->input('pay_date'),
        'end_date'=>$request->input('end_date'),
        'amount'=>$request->input('amount'),
        'description'=>$request->input('description'),
        'account'=>$request->input('account'),
        'pages'=>$request->input('pages'),
        'attachments'=>''
        ]); 
            }
         
        
   
    if($task)
    {
         $data=[
            'success'=>'saved',
            ];
        return response()->json($data);
    }
    else
    {
         $data=[
            'errors'=>'we encoutered a server error please try again!',
            ];
        return response()->json($data);
    }
    }
    
    
    public function editTasks(Request $request)
    {
        $data = Validator::make($request->all(),[
        'paper_type'=>'',
        'subject'=>'',
        'cpp'=>'required',
        'nature'=>'',
        'pay_date'=>'required',
        'end_date'=>'required',
        'amount'=>'required',
        'description'=>'required',
        'account'=>'required',
        'pages'=>'',
        'attachments'=>'',
        'id'=>''
        ]);
        
        
        if ($data->fails()){
             $data=[
            'errors'=>'please ensure all the fields are filled with correct data!',
            ];
        return response()->json($data);
        }
        
        $filePaths = [];
         $files = request()->file('attachments');
           if($files) 
           {
            foreach($request->file('attachments') as $file)
            {
               
                
               
                $fileName = $file->getClientOriginalName(); // get the original name of the file
                $file->move(public_path('attachments'), $fileName); // save the file to the public/uploads folder
                
                array_push($filePaths, $fileName);

            
               
            }
            
        $task=task::where('id','=',$request->input('id'))->update([
        'paper_type'=>$request->input('paper_type'),
        'subject'=>$request->input('field'),
        'cpp'=>$request->input('cpp'),
        'nature'=>$request->input('nature'),
        'pay_date'=>$request->input('pay_date'),
        'end_date'=>$request->input('end_date'),
        'amount'=>$request->input('amount'),
        'description'=>$request->input('description'),
        'account'=>$request->input('account'),
        'pages'=>$request->input('pages'),
        'attachments'=>json_encode($filePaths)
        ]);
            
           }
           else
           {
        $task=task::where('id','=',$request->input('id'))->update([
        'paper_type'=>$request->input('paper_type'),
        'subject'=>$request->input('field'),
        'cpp'=>$request->input('cpp'),
        'nature'=>$request->input('nature'),
        'pay_date'=>$request->input('pay_date'),
        'end_date'=>$request->input('end_date'),
        'amount'=>$request->input('amount'),
        'description'=>$request->input('description'),
        'account'=>$request->input('account'),
        'pages'=>$request->input('pages'),
        
        ]);
           }
         
         
        
    
    if($task)
    {
         $data=[
            'success'=>'saved',
            ];
        return response()->json($data);
    }
    else
    { 
         $data=[
            'errors'=>'we encoutered a server error please try again!',
            ];
        return response()->json($data);
    }
    }
    
    
    
    public function taskValidation2(Request $request)
    {
         if($request->ajax())
    {
    $task=\App\Models\task::find($request->id);
    if($task)
    {
        $usertask=\App\Models\submittedtasks::where('task_id','=',$request->id)->where('user_id','=',\Auth::User()->id)->first();
        if($usertask)
        {
            if($usertask->status =='pending')
            {
            return "You have already submitted that task,please wait for review";
            }
            elseif($usertask->status == 'declined')
            {
                return "task id successfully verified";
            }
            elseif($usertask->status == 'approved')
            {
                return "You task have been approved you cant resubmit again";
            }
        }
        else
        {
        return "You have not submitted this task,kindly use submit section";
        }
    }
    else
    {
        return "please confirm your task id and enter again";
    }
    }
    }
    
    
    
    public function withdraw(Request $request)
    {
        $user_id=\Auth::User()->id;
   if($user_id)
   {
       $amount=$request->amount;
       $limit=\App\Models\withdrawallimits::first()->limit;
       if($amount >= $limit)
       {
       $bal=\Auth::User()->balance;
       if($amount < $bal)
       {
       $trans=\App\Models\transactions::create([
           'amount'=>$amount,
           'type'=>'withdrawal',
           'status'=>'pending',
           'user_id'=>$user_id,
           ]);
           
          if($trans)
          {
              $user=\App\Models\User::where('id','=',$user_id)->decrement('balance',$amount);
              $user2=\App\Models\User::where('id','=',$user_id)->increment('money_out',$amount);
          }
          return redirect()->back()->with('success','Your money was successfully withdrawal wait for approval by the system admin');
       }
       else
       {
           return redirect()->back()->with('success','The amount is above your account balance of '.$bal);
       }
       }
       else
       {
           return redirect()->back()->with('success','The amount is below the withdrawal limit of '.$limit);
       }
   }
   else
   {
       return redirect('/login');
   }
    }
    
    
   public function requestOrder(Request $request)
   {
       //confirm if user has bidded on the task
       $confirm_order=\App\Models\awardedtasks::where('user_id','=',\Auth::User()->id)->where('task_id','=',$request->order_id)->first();
       if($confirm_order)
       {
           $data=['exists'=>'yes'];
           return response()->json($data);
       }
       else
       {
           
           
           $order=\App\Models\awardedtasks::create(['user_id'=>Auth::User()->id,'task_id'=>$request->order_id,'status'=>'request']);
           if($order)
           {
               $data=['success'=>'yes'];
           return response()->json($data);
           }
           else
           {
               $data=['fail'=>'yes'];
           return response()->json($data);
           }
           
       }
   }
    
    
   public function discardOrder(Request $request)
   {
       $order=\App\Models\awardedtasks::where('id','=',$request->order)->update(['status'=>'declined']);
       if($order)
       {
           $data=['success'=>'successfully discarded'];
       }
       else
       {
       $data=['fail'=>'we encoutered a server error'];
       }
       
       return response()->json($data);
   }
   
   
   public function assignOrder(Request $request)
   {
       $order=\App\Models\awardedtasks::where('id','=',$request->order)->update(['status'=>'assigned']);
       if($order)
       {
           $data=['success'=>'successfully assigned'];
       }
       else
       {
       $data=['fail'=>'we encoutered a server error'];
       }
       
       return response()->json($data); 
   }
    
    
  public function subscribe(Request $request)
  {
      $user=\App\Models\User::where('id','=',\Auth::User()->id)->first();
      if ($user && Hash::check($request->password, $user->password)) {
            
            $bal=\Auth::User()->balance;
            if($bal<$request->subscribeamount)
            {
                $data=['error'=>'insufficient balance'];
                return response()->json($data);
            }
            else
            {
                $bal2=$bal-$request->subscribeamount;
                $mo=\Auth::User()->money_out-$request->subscribeamount;
                $user=\App\Models\User::where('id','=',\Auth::User()->id)->update([
                    'status'=>'active',
                    'account'=>$request->subscriptiontype,
                    'balance'=>$bal2,
                    'money_out'=>$mo,
                    'activation_date'=>\Carbon\Carbon::now(),
                    ]);
                    if($user)
                    {
                        $data=['success'=>'Account activated successfully'];
                        return response()->json($data);
                    }
                    else
                    {
                        $data=['error'=>'We encoutered a server error please try again',];
                        return response()->json($data);
                    }
            }
        
        } 
    else {
        $data=['error'=>'incorrect password'];
        return response()->json($data);
    }

  }
    
    
    public function submitTask(Request $request)
    {
        $at=\App\Models\submittedtasks::where('a_id','=',$request->aw_id)->first();
        if($at)
        {
        if($at->status =='completed')
        {
            $data=['error'=>'You have already submitted this order'];
            return response()->json($data);
        }
        else if($at->status =='awaiting review')
        {
            $data=['error'=>'Your order is awaiting review'];
            return response()->json($data);
        }
       else if($at->status =='declined')
        {
            $attempt=$at->attempt+1;
            
         $filePaths = [];
         $files = request()->file('attachments');
          if($files)
          {
            foreach($files as $file)
            {
               
                
               
                $fileName = $file->getClientOriginalName(); // get the original name of the file
                $file->move(public_path('tasks'), $fileName); // save the file to the public/uploads folder
                
                array_push($filePaths, $fileName);
               
            }
            
        $task=\App\Models\submittedtasks::where('id','=',$at->id)->update([
            'task_id'=>$request->order_id,
            'file'=>json_encode($filePaths),
            'a_id'=>$request->aw_id,
            'attempt'=>$attempt,
            'status'=>'awaiting review',
            'user_id'=>\Auth::User()->id,
            ]);
            if($task)
            {
            $data=['success'=>'Order submitted successfully'];
            return response()->json($data);
            }
            else
            {
             $data=['error'=>'We encoutered a server error please try again'];
            return response()->json($data);
            }
        }
        }
        else
        {
             $filePaths = [];
         $files = request()->file('attachments');
         if($files)
         {
            foreach($files as $file)
            {
               
                
               
                $fileName = $file->getClientOriginalName(); // get the original name of the file
                $file->move(public_path('tasks'), $fileName); // save the file to the public/uploads folder
                
                array_push($filePaths, $fileName);
               
            }
        $task=\App\Models\submittedtasks::create([
            'task_id'=>$request->order_id,
            'file'=>json_encode($filePaths),
            'a_id'=>$request->aw_id,
            'status'=>'awaiting review',
            'attempt'=>1,
            'user_id'=>\Auth::User()->id,
            ]);
            
             if($task)
            {
            $data=['success'=>'Order submitted successfully'];
            return response()->json($data);
            }
            else
            {
             $data=['error'=>'We encoutered a server error please try again'];
            return response()->json($data);
            }
        }
        }
        }
        else
        {
         $filePaths = [];
         $files = request()->file('attachments');
          if($files)
          {
            foreach($files as $file)
            {
               
                
               
                $fileName = $file->getClientOriginalName(); // get the original name of the file
                $file->move(public_path('tasks'), $fileName); // save the file to the public/uploads folder
                
                array_push($filePaths, $fileName);
               
            }
        $task=\App\Models\submittedtasks::create([
            'task_id'=>$request->order_id,
            'file'=>json_encode($filePaths),
            'a_id'=>$request->aw_id,
            'status'=>'awaiting review',
            'attempt'=>1,
            'user_id'=>\Auth::User()->id,
            ]);
            
             if($task)
            {
            $data=['success'=>'Order submitted successfully'];
            return response()->json($data);
            }
            else
            {
             $data=['error'=>'We encoutered a server error please try again'];
            return response()->json($data);
            }
        }
            
        }
        
        
    }
    
    
     public function notification(Request $request)
    {
        $notification=\App\Models\notifications::create(['message'=>$request->message]);
  if($notification){
    return redirect()->back()->with('success','SUCCESSFULLY SENT');
  }
  else
  {
       return redirect()->back()->with('success','SERVER ERROR TRY AGAIN');
  }
    }
    
    
}
