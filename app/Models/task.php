<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class task extends Model
{
     protected $fillable=['id','paper_type','subject','cpp','nature','pay_date','end_date','amount','description','account','pages','attachments'];
     public function awardedtasks(){
    return $this->hasMany(awardedtasks::class,'user_id');
} 

    protected $dates=['deleted_date','end_date','pay_date'];
    protected $casts=[
        'images'=>'array',
        'facilities'=>'array',
        ];
}
