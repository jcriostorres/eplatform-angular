import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseList } from './model/course-list-model';
import { RoadmapSaveResponse } from './model/roadmap-save-response-model';
import { RoadmapPageService } from './roadmap-page.service';

@Component({
  selector: 'app-roadmap-page',
  templateUrl: './roadmap-page.component.html',
  styleUrls: ['./roadmap-page.component.css']
})
export class RoadmapPageComponent implements OnInit {

  roadmapId: String;

  roadmapInfo: RoadmapSaveResponse;

  courses: Array<CourseList>;

  constructor(private readonly roadmapPageService: RoadmapPageService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.roadmapId = params.get('id');
      this.getRoadmapInfo();
    });

  }

  getRoadmapInfo(): void{
    this.roadmapPageService.getRoadmapById(this.roadmapId)
    .subscribe(roadmap => {
      this.roadmapInfo = roadmap;
      this.courses = roadmap.courseIds;

    });
  }

}
