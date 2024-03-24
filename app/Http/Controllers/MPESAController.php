<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\mpesamanualtransactions;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
class MPESAController extends Controller
{
    
    
      public function lipaNaMpesaPassword()
    {
        //timestamp
        $timestamp = Carbon::rawParse('now')->format('YmdHms');
        //passkey
        $passKey =env('MPESA_PASSKEY');
        $businessShortCOde ="6321967";
        //generate password
        $mpesaPassword = base64_encode($businessShortCOde.$passKey.$timestamp);

        return $mpesaPassword;
        
    }
    
    
    public function getAccessToken1()
    {
        $url = 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

        $curl = curl_init($url);
        curl_setopt_array(
            $curl,
            array(
                CURLOPT_HTTPHEADER => ['Content-Type: application/json; charset=utf8'],
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_HEADER => false,
                CURLOPT_USERPWD => env('MPESA_CONSUMER_KEY') . ':' . env('MPESA_CONSUMER_SECRET')
            )
        );
        $response = json_decode(curl_exec($curl));
        curl_close($curl);

        // return $response;
        return $response->access_token;
    }



     public function getAccessToken()
    {
        $url = 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

        $curl = curl_init($url);
        curl_setopt_array(
            $curl,
            array(
                CURLOPT_HTTPHEADER => ['Content-Type: application/json; charset=utf8'],
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_HEADER => false,
                CURLOPT_USERPWD => env('MPESA_CONSUMER_KEY') . ':' . env('MPESA_CONSUMER_SECRET')
            )
        );
        $response = json_decode(curl_exec($curl));
        curl_close($curl);

        // return $response;
        return $response->access_token;
    }


    public function b2cRequest(Request $request)
    {
        
           $phone =  $request->phone;
            $formatedPhone = substr($phone, 1);//726582228
            $code = "254";
            $phoneNumber = $code.$formatedPhone;//254726582228

        
        $curl_post_data = array(
            'InitiatorName' => env('MPESA_B2C_INITIATOR'),
            'SecurityCredential' => env('MPESA_B2C_PASSWORD'),
            'CommandID' => 'SalaryPayment',
            'Amount' => $request->amount,
            'PartyA' =>3033605,
            'PartyB' => $phoneNumber,
            'Remarks' => $request->remarks,
            'QueueTimeOutURL' => env('MPESA_TEST_URL') . '/api/b2ctimeout',
            'ResultURL' => env('MPESA_TEST_URL') . '/api/b2ccallback',
            'Occasion' => $request->occasion
          );

        $response = $this->makeHttp('/b2c/v1/paymentrequest', $curl_post_data);



        return $response;
    }




public function accountBal()
{
    
     $curl_post_data = array(
            "Initiator"=> env('MPESA_B2C_INITIATOR'),
            "SecurityCredential"=> env('MPESA_B2C_PASSWORD'),
            "CommandID"=> "AccountBalance",
            "PartyA"=> 3033605,
            "IdentifierType"=> "4",
            "Remarks"=> "account bal",
            "QueueTimeOutURL"=>  env('MPESA_TEST_URL') .'\api\b2ctimeout' ,
            'ResultURL' => env('MPESA_TEST_URL') . '/api/b2ccallback',
          );

        $response = $this->makeHttp('/accountbalance/v1/query', $curl_post_data);



        return $response;
    
  
}

    /**
     * Register URL
     */
    public function registerURLS()
    {
        $body = array(
            'ShortCode' => env('MPESA_STK_SHORTCODE'),
            'ResponseType' => 'Completed',
            'ConfirmationURL' => env('MPESA_TEST_URL') . '/api/confirmation',
            'ValidationURL' => env('MPESA_TEST_URL') . '/api/validation'
        );

        $url = '/c2b/v2/registerurl';
        $response = $this->makeHttp($url, $body);


        return $response;
    }

    public function stkPush(Request $request)
    {
        $timestamp = Carbon::rawParse('now')->format('YmdHms');
        $password = env('MPESA_STK_SHORTCODE').env('MPESA_PASSKEY').$timestamp;

            $phone =  $request->phone;
            $formatedPhone = substr($phone, 1);//726582228
            $code = "254";
            $phoneNumber = $code.$formatedPhone;//254726582228

      
            
            $body=array(
                "BusinessShortCode"=> env('MPESA_STK_SHORTCODE'),
                "Password"=> $this->lipaNaMpesaPassword(),
                "Timestamp"=> Carbon::rawParse('now')->format('YmdHms'),
                "TransactionType"=> "CustomerPayBillOnline",
                "Amount"=> $request->amount,
                "PartyA"=>$phoneNumber,
                "PartyB"=> env('MPESA_STK_SHORTCODE'),
                "PhoneNumber"=>$phoneNumber,
                "CallBackURL"=> "https://prowriters.writerzbay.com/public/api/stkpush",
                "AccountReference"=> $request->cardHolder,
                "TransactionDesc"=> $request->subscriptionId
            );
            
            
        $url = '/stkpush/v1/processrequest';

        $response = $this->makeHttp($url, $body);

        return response()->json($response);
    }
    
    
   
    

    /**
     * Simulate Transaction
     */
   public function simulateTransaction(Request $request)
    {
        $body = array(
            'ShortCode' => 4093225,
            'Msisdn' => '254795143942',
            'Amount' => $request->amount,
            'BillRefNumber' => $request->account,
            'CommandID' => 'CustomerPayBillOnline'
        );

        $url =  '/c2b/v1/simulate';
        $response = $this->makeHttp($url, $body);

        return $response;
    }
    /**
     * Transaction status API
     */
    public function transactionStatus(Request $request)
    {
      $id=$request->transactionid;
       $trans=mpesamanualtransactions::where('TransID','=',$id)->first();
      
      if($trans)
      {
          //return redirect('/activation')->with('success','Mpesa code already used please try again with a different code');
          $response='Mpesa code already used please try again with a different code';
          return $response;
      }
      else
      {
        if(Auth::check())
        {
          
        $body =  array(
            'Initiator' => env('MPESA_B2C_INITIATOR40'),
            'SecurityCredential' => env('MPESA_B2C_PASSWORD40'),
            'CommandID' => 'TransactionStatusQuery',
            'TransactionID' => $request->transactionid,
            'PartyA' => env('MPESA_SHORTCODE'),
            'IdentifierType' => '4',
            'ResultURL' => env('MPESA_TEST_URL'). '/api/transaction-status/result_url/'.\Auth::User()->id,
            'QueueTimeOutURL' => env('MPESA_TEST_URL'). '/api/transaction-status/timeout_url',
            'Remarks' => 'CheckTransaction',
            'Occasion' => 'VerifyTransaction'
          );

        $url =  'transactionstatus/v1/query';
        $response = $this->makeHttp($url, $body);
        
         $response1='Please wait we are processing your request,refresh to check the status of the account';
        return $response1;
       
        }
        else
        {
            return redirect('/login');
        }
      }
        
    }


    public function reverseTransaction(Request $request){
        $body = array(
            'Initiator' => env('MPESA_B2C_INITIATOR'),
            'SecurityCredential' => env('MPESA_B2C_PASSWORD'),
            'CommandID' => 'TransactionReversal',
            'TransactionID' => $request->transactionid,
            'Amount' => $request->amount,
            'ReceiverParty' => env('MPESA_SHORTCODE'),
            'RecieverIdentifierType' => '11',
            'ResultURL' => env('MPESA_TEST_URL') . '/api/reversal/result_url',
            'QueueTimeOutURL' => env('MPESA_TEST_URL') . '/api/reversal/timeout_url',
            'Remarks' => 'ReversalRequest',
            'Occasion' => 'ErroneousPayment'
          );

          $url =  'reversal/v1/request';
          $response = $this->makeHttp($url, $body);

          return $response;
    }


    public function makeHttp($url, $body)
    {
        // $url = 'https://mpesa-reflector.herokuapp.com' . $url;
        $url = 'https://api.safaricom.co.ke/mpesa/' . $url;
        $curl = curl_init();
        curl_setopt_array(
            $curl,
            array(
                    CURLOPT_URL => $url,
                    CURLOPT_HTTPHEADER => array('Content-Type:application/json','Authorization:Bearer '. $this->getAccessToken()),
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_POST => true,
                    CURLOPT_POSTFIELDS => json_encode($body)
                )
        );
        $curl_response = curl_exec($curl);
        curl_close($curl);
        return $curl_response;
    }
}
