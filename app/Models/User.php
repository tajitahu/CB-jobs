<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'fname','lname','phone','avatar','status','account','referral_code','money_in','money_out','balance','username','email','password','activation_date',
    ];
 

    public function awardedtasks(){
    return $this->hasMany(awardedtasks::class,'user_id');
}
public function transactions(){
    return $this->hasMany(transactions::class,'user_id');
}

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
     protected $dates=['activation_date'];
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
