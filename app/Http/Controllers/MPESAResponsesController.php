<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\mpesamanualtransactions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Models\mpesatransactions;
use Illuminate\Support\Str;
class MPESAResponsesController extends Controller
{
    public function validation(Request $request){
        Log::info('Validation endpoint hit');
        Log::info($request->all());

        return [
            'ResultCode' => 0,
            'ResultDesc' => 'Accept Service',
            'ThirdPartyTransID' => rand(3000, 10000)
        ];
    }

    public function stkPush(Request $request){
        Log::info('STK Push endpoint hit');
        Log::info($request->all());
        
        $response = json_decode($request->getContent());
     
        $ResultCode=$response->Body->stkCallback->ResultCode;
        if($ResultCode ==0)
        {
        $resData=$response->Body->stkCallback->CallbackMetadata;
        $amount=$resData->Item[0]->Value;
        $TransID=$resData->Item[1]->Value;
        $TransTime=$resData->Item[3]->Value;
        $MSISDN=$resData->Item[4]->Value;
        
        $phone=str_replace('254','0',$MSISDN);
        
        $user=User::where('phone','=',$phone)->first();
        
        $trn = new mpesatransactions;
        $trn->TransAmount=$amount;
        $trn->TransID=$TransID;
        $trn->FirstName=$user->fname;
        $trn->LastName=$user->lname;
        $trn->TransactionType='Stk Push';
        $trn->TransTime=$TransTime;
        $trn->BillRefNumber=$user->username;
        $trn->MSISDN=$phone;
        $trn->response = json_encode($response);
        $trn->save();
        
        $moneyin=$user->money_in + $amount;
            $bal=$user->balance + $amount;
            $userupdate=User::where('id','=',$user->id)->update([
                'money_in'=>$moneyin,
                'balance'=>$bal,
                ]);

        
        }
       
        
        
        return [
            'ResultCode' => 0,
            'ResultDesc' => 'Accept Service',
            'ThirdPartyTransID' => rand(3000, 10000)
        ];
    }

    public function b2cCallback(Request $request){
        Log::info('B2C endpoint hit');
        Log::info($request->all());
        return [
            'ResultCode' => 0,
            'ResultDesc' => 'Accept Service',
            'ThirdPartyTransID' => rand(3000, 10000)
        ];
    }
    
    public function accountBal(Request $request){
        Log::info('Account Bal endpoint hit');
        Log::info($request->all());
        return [
            'ResultCode' => 0,
            'ResultDesc' => 'Accept Service',
            'ThirdPartyTransID' => rand(3000, 10000)
        ];
    }
    
    public function transactionStatusResponse(Request $request,$id){
       /*
        Log::info('transactionStatusResponse  endpoint hit');
        Log::info($request->all());
        */
        $response = json_decode($request->getContent());
        
        $resCode=$response->Result->ResultCode;
        if($resCode == 0)
        {
            
            $resData=$response->Result->ResultParameters;
            $amount=$resData->ResultParameter[10]->Value;
            $TransactionType="Deposit";
            $TransID=$resData->ResultParameter[12]->Value;
            $TransactionStatus=$resData->ResultParameter[8]->Value;
            $ThirdPartyTransID=$response->Result->TransactionID;
            $sender=$resData->ResultParameter[0]->Value;
            $paybill1=$resData->ResultParameter[1]->Value;
            $TransTime=$resData->ResultParameter[9]->Value;
            $senderInfo=explode(' ',$sender);
            $phone=$senderInfo[0];
            if(count($senderInfo) > 2)
            {
                $fname=$senderInfo[2];
            }
            else
            {
                $fname=null;
            }
            
            if(count($senderInfo) > 3)
            {
                 $mname=$senderInfo[3];
            }
            else
            {
                $mname=null; 
            }
           
            if(count($senderInfo) > 4)
            {
            $lname=$senderInfo[4];
            }
            else
            {
                $lname=null;
            }
            
            
            $paybill2=explode('-',$paybill1);
            $paybill=$paybill2[0];
            $user_id=$id;
         
            
                
      $user=User::where('id','=',$id)->first(); 
      
      $trans21=mpesatransactions::where('TransID','=',$TransID)->first();
      if(empty($trans21))
      {
          $trasaction=mpesamanualtransactions::create([
                'TransactionType'=>$TransactionType ,
                'TransID'=>$TransID ,
                'TransAmount'=>$amount ,
                'BusinessShortCode'=>$paybill ,
                'TransactionStatus'=>$TransactionStatus ,
                'ThirdPartyTransID'=>$ThirdPartyTransID ,
                'MSISDN'=>$phone ,
                'fname'=>$fname ,
                'mname'=>$mname ,
                'lname'=>$lname ,
                'TransTime'=>$TransTime ,
                'user_id'=>$user_id,
                ]);
              
         if($amount==450.00)
        {
              $moneyin=$user->money_in +450;
              $bal=$user->balance + 450;
            $userupdate=User::where('id','=',$user->id)->update([
                'account'=>'Bronze',
                'status'=>'active',
                'money_in'=>$moneyin,
                'balance'=>$bal,
                ]);
            $referral=$user->referral_code;
            $users=User::get();
                if($userupdate)
                {
                    foreach($users as $user1)
                    {
                        
                        $code=$user1->username;
                              
                        if($code==$referral)
                        {
                            $amount=300;
                            $initialbal=$user1->balance;
                            $money_in=$user1->money_in;
                            $fmoney_in=$money_in+$amount;
                            $finalbal=$initialbal+$amount;
                           
                            $userupdatebal=User::where('id','=',$user1->id)->update([
                                'balance'=>$finalbal,
                                 'money_in'=>$fmoney_in,
                                ]);
                            
                           
                            
                        }
                        
                        
                        
                        
                     
                           
                       
                        
                        
                                
                                //$code2=$user1->fname.'_'.$user1->id;
                         
                              
                        
                    }
                    
                }
        }
        
      
        
         if($amount==300.00)
        {
            $moneyin=$user->money_in +300;
            $bal=$user->balance + 300;
            $userupdate=User::where('id','=',$user->id)->update([
                'account'=>'Silver',
                'status'=>'active',
                'money_in'=>$moneyin,
                'balance'=>$bal,
                ]);
            $referral=$user->referral_code;
            $users=User::get();
            /*
                if($userupdate)
                {
                    foreach($users as $user1)
                    {
                        
                        $code=$user1->username;
                              
                       if($code==$referral)
                        {
                            $amount=500;
                            $initialbal=$user1->balance;
                            $money_in=$user1->money_in;
                            $fmoney_in=$money_in+$amount;
                            $finalbal=$initialbal+$amount;
                           
                            $userupdatebal=User::where('id','=',$user1->id)->update([
                                'balance'=>$finalbal,
                                 'money_in'=>$fmoney_in,
                                ]);
                            
                            $referral2=$user1->referral_code;
                            foreach($users as $user1)
                        {
                           
                            $code=$user1->fname.'_'.$user1->id;
                            if($code==$referral2)
                                {   
                                    $amount2=200;
                                    $initialbal2=$user1->balance;
                                    $finalbal2=$initialbal2+$amount2;
                                    $money_in=$user1->money_in;
                                    $fmoney_in=$money_in+$amount2;
                                    
                                    $userupdatebal2=User::where('id','=',$user1->id)->update([
                                    'balance'=>$finalbal2,
                                    'money_in'=>$fmoney_in,
                                    ]);
                                } 
                        }
                            
                        }
                        
                        
                        
                              
                        
                    }
                    
                }
                */
        }
        
      
      
      }
      else
      {
          if($amount==450.00)
        {
            $moneyin=$user->money_in +450;
            $bal=$user->balance + 450;
            $userupdate=User::where('id','=',$user->id)->update([
                'account'=>'Bronze',
                'status'=>'active',
                'money_in'=>$moneyin,
                'balance'=>$bal,
                ]);
            
        }
        
         
        
        
         if($amount==300.00)
        {
            $moneyin=$user->money_in +300;
            $bal=$user->balance + 300;
            $userupdate=User::where('id','=',$user->id)->update([
                'account'=>'Silver',
                'status'=>'active',
                'money_in'=>$moneyin,
                'balance'=>$bal,
                ]);
           
        }
        
        
       
      }
           
        Log::info('transactionStatusResponse  endpoint hit');
        Log::info($request->all());
        
        
        
        
        
        }
        else
        {
        Log::info('transactionStatusResponse  endpoint hit');
        Log::info($request->all());
        }
       
      
    
        return [
            'ResultCode' => $resCode,
            'ResultDesc' => 'Accept Service',
            'ThirdPartyTransID' => rand(3000, 10000)
        ];
      
    }

    public function transactionReversal(Request $request){
        Log::info('transactionReversal  endpoint hit');
        Log::info($request->all());
        return [
            'ResultCode' => 0,
            'ResultDesc' => 'Accept Service',
            'ThirdPartyTransID' => rand(3000, 10000)
        ];
    }


    public function confirmation(Request $request){
        Log::info('Confirmation endpoint hit');
        Log::info($request->all());
        
        
        $response = json_decode($request->getContent());
     
       
        $amount=$response->TransAmount;
        $TransID=$response->TransID;
        $TransTime=$response->TransTime;
        $MSISDN=$response->MSISDN;
        $FirstName=$response->FirstName;
        $BillRefNumber=$response->BillRefNumber;
        $TransactionType=$response->TransactionType;
        $phone=str_replace('254','0',$MSISDN);
        
        $user=User::where('username','=',$BillRefNumber)->first();
        
        $trn = new mpesatransactions;
        $trn->TransAmount=$amount;
        $trn->TransID=$TransID;
        $trn->FirstName=$FirstName;
        $trn->LastName=$user->lname;
        $trn->TransactionType=$TransactionType;
        $trn->TransTime=$TransTime;
        $trn->BillRefNumber=$BillRefNumber;
        $trn->MSISDN=$phone;
        $trn->response = json_encode($response);
        $trn->save();
        
            $moneyin=$user->money_in + $amount;
            $bal=$user->balance + $amount;
            if($amount=='1.00')
            {
               $userupdate=User::where('id','=',$user->id)->update([
                'money_in'=>$moneyin,
                'balance'=>$bal,
                'account'=>'Premium Plan'
                ]); 
            }
            else
            {
            $userupdate=User::where('id','=',$user->id)->update([
                'money_in'=>$moneyin,
                'balance'=>$bal,
                ]);
            }
        
        
        return [
            'ResultCode' => 0,
            'ResultDesc' => 'Accept Service',
            'ThirdPartyTransID' => rand(3000, 10000)
        ];
        
}
}
