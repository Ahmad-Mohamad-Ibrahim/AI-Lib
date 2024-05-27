<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ChatMessage extends Model
{
    use HasFactory;

    protected $fillable = [
        'speaker',
        'body'
    ];

    public function chat(): BelongsTo 
    {
        return $this->belongsTo(Chat::class, 'chat_id');
    }
}
