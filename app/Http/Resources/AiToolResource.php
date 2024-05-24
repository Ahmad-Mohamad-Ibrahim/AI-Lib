<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AiToolResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'website' => $this->website,
            'description' => $this->description,
            'image' => asset("storage") . "/" . $this->image,
            'launch_date' => (new Carbon($this->launch_date))->format('d/m/Y'),
            'rating' => $this->rating,
            'is_accessible' => $this->is_accessible,
            'is_verified' => $this->is_verified,
            'category' => new CategoryResource($this->category),
        ];
    }
}
