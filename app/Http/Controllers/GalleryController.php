<?php

namespace App\Http\Controllers;

use App\Http\Resources\GalleryResource;
use App\Models\GalleryImage;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("Gallery/Gallery" , [
            'galleryImages' => GalleryResource::collection(GalleryImage::all()),
        ]);
    }
}
