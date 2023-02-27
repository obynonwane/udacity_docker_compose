import { Component, OnInit, Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';
import { Block } from './model/block';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private config: ConfigService) {}
  menu = { home: 'Home' };
  block: Block = {
    total_block_produced_within_time: 1,
    total_missed_blocks: 1,
    duration_in_hrs: 1,
  };

  async ngOnInit(): Promise<void> {
    const response = (await this.config.getMissedBlock()).subscribe((data) => {
      const result = JSON.parse(JSON.stringify(data));
      this.block = result;
    });
  }
}
