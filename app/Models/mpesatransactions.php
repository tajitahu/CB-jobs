<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mpesatransactions extends Model
{
      protected $fillable=[
        'TransactionType',
        'TransID',	
        'TransTime',
        'TransAmount',	
        'BusinessShortCode',	
        'BillRefNumber',	
        'InvoiceNumber',	
        'OrgAccountBalance',	
        'ThirdPartyTransID',	
        'MSISDN',	
        'FirstName',	
        'MiddleName',	
        'LastName',	
        'response',
        ];
    use HasFactory;
}
