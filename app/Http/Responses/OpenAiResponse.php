<?php

namespace App\Http\Responses;

use Exception;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Support\Facades\Http;

class OpenAiResponse implements Responsable
{
    public function __construct(private array $options)
    {
    }
    public function toResponse($request)
    {
        try {

            return Http::withToken(config('services.openai.secret'))
                ->post(env('OPEN_AI_CHAT_ENDPOINT', 'https://api.openai.com/v1/chat/completions'), $this->options)->json();
        } catch (Exception $e) {
            abort(500, $e->getMessage());
        }
    }
}
