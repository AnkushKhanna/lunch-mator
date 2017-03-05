import {Component, Injectable, Input, OnInit} from '@angular/core';
import {UserLookupService} from '../../../services/user-lookup.service';
import {CommentDto} from '../../../dto/types';

@Component({
  selector: 'message',
  templateUrl: 'assets/javascripts/app/comment/components/message/comment-message.component.html'
})

@Injectable()
export class CommentMessageComponent implements OnInit {

  @Input()
  private message: CommentDto;

  constructor(private userService: UserLookupService) {
  }

  ngOnInit(): void {
    this.userService.getUser(this.message.authorId)
      .subscribe((response: any) => {
        this.message.author  = `${response.firstName} ${response.lastName}`;
      });
  }

}
