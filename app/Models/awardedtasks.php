<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class awardedtasks extends Model
{
    protected $fillable=['user_id','status','task_id'];
    public function User(){
    return $this->belongsTo('App\Models\User','user_id','id');
}

 public function task(){
    return $this->belongsTo('App\Models\task','task_id','id');
}
public function submittedtask(){
    return $this->hasOne('App\Models\submittedtask','a_id','id');
}

    use HasFactory;
}
