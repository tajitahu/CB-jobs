<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMpesamanualtransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mpesamanualtransactions', function (Blueprint $table) {
            $table->id();
            $table->string('TransactionType')->default('Deposit');
            $table->string('user_id');
            $table->string('TransID')->default('pay');
            $table->string('TransTime')->default('pay');
            $table->decimal('TransAmount', 8,2)->default(0);
            $table->string('BusinessShortCode')->default('4093225');
             $table->string('TransactionStatus')->default('Completed');
            $table->string('ThirdPartyTransID')->default('pay');
            $table->string('MSISDN')->default('pay');
            $table->string('fname')->nullable();
            $table->string('mname')->nullable();
            $table->string('lname')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mpesamanualtransactions');
    }
}
