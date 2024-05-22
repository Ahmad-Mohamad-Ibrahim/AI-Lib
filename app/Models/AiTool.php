<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AiTool extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'website',
        'launch_date',
        'rating',
    ];

    public function category() : BelongsTo   
    {
        return $this->belongsTo(Category::class);
    }
}
