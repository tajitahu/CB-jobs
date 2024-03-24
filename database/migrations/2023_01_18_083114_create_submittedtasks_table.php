<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubmittedtasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('submittedtasks', function (Blueprint $table) {
            $table->id();
            $table->string('task_id')->nullable();
            $table->string('file');
            $table->string('user_id');
            $table->string('status');
            
            $table->string('attempt')->nullable();
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
        Schema::dropIfExists('submittedtasks');
    }
}
