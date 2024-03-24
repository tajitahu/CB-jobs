<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mpesamanualtransactions extends Model
{
     protected $fillable=[
'TransactionType',
'TransID',	
'TransTime',
'TransAmount',	
'ThirdPartyTransID',	
'MSISDN',	
'fname',	
'mname',	
'lname',
'user_id',
];
    use HasFactory;
}
