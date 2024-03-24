<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class submittedtasks extends Model
{
    protected $fillable=['task_id','name','file','status','user_id','attempt','a_id'];
    
     public function User(){
    return $this->belongsTo('App\Models\User','user_id','id');
}

 public function task(){
    return $this->belongsTo('App\Models\task','task_id','id');
}

public function awardedtasks(){
    return $this->belongsTo('App\Models\awardedtasks','a_id','id');
}

    use HasFactory;
}
