import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-school-gallery',
  standalone: true,
  imports: [GalleriaModule, ButtonModule],
  templateUrl: './school-gallery.component.html',
  styleUrl: './school-gallery.component.scss'
})
export class SchoolGalleryComponent implements OnInit {

    displayCustom: boolean = false;

    activeIndex: number = 0;

    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    ngOnInit() {
        this.images = [
            {
          itemImageSrc: '/assets/img/school/img-01.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-01.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-02.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-02.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-03.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-03.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-04.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-04.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-05.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-05.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-06.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-06.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-07.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-07.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-08.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-08.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-09.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-09.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-10.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-10.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-11.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-11.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-12.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-12.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-13.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-13.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-14.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-14.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-15.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-15.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-16.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-16.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-17.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-17.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-18.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-18.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-19.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-19.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-20.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-20.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-21.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-21.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-22.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-22.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-23.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-23.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-24.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-24.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-25.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-25.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-26.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-26.jpeg',
            },
            {
          itemImageSrc: '/assets/img/school/img-27.jpeg',
          thumbnailImageSrc: '/assets/img/school/img-27.jpeg',
            },


            

    ]
      this.displayCustom = true
    }

    imageClick(index: number) {
        this.activeIndex = index;
        this.displayCustom = true;
    }
}



