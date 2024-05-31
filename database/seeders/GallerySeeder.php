<?php

namespace Database\Seeders;

use App\Models\GalleryImage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // read through the files in /assets/img/galleryImg
        $galleryImagesPath = public_path('assets/img/galleryImg');
        print($galleryImagesPath);

        $galleryImages = scandir($galleryImagesPath);
        // var_dump($galleryImages);
        if (count($galleryImages) > 0) {
            foreach($galleryImages as $galleryImage) {
                if($galleryImage == '.' || $galleryImage == '..') {
                    continue;
                }
                $imageFile = File::get(implode('/' , [$galleryImagesPath ,$galleryImage]));
                // move to storage
                if( Storage::disk('public')->put(implode('/', ['gallery',  $galleryImage]) , $imageFile) )
                {
                    GalleryImage::create([
                        'image' => implode('/', array('gallery',  $galleryImage)),
                    ]);
                    print("$galleryImage created\n\n");
                }
            }

        }
        // create a new GalleryImage 
    }
}
