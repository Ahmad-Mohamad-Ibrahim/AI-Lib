<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ai_tools', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->string('website');
            $table->foreignIdFor(\App\Models\User::class, 'user_id')->nullable()->constrained()->nullOnDelete();
            $table->string('image')->nullable();
            $table->date('launch_date');
            $table->float('rating')->default(0.0);;
            $table->boolean('is_accessible')->default(false);
            $table->boolean('is_verified')->default(false);;
            $table->timestamps();
        });

        // saved_tools is not the convention name
        Schema::create('saved_tools', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\User::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(\App\Models\AiTool::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ai_tools');
        Schema::dropIfExists('saved_tools');
    }
};
