<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'ai_tool_id',
        'body',
        'rating',
    ];

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function aiTool() : BelongsTo
    {
        return $this->belongsTo(AiTool::class);
    }
}
