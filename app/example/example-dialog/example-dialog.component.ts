import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExampleType } from './model/example-type.enum';
import { InfoExampleItem } from './model/info-example-item';
import { InfoItem } from './model/info-item';
import { InfoType } from './model/info-type.enum';

@Component({
  selector: 'app-example-dialog',
  templateUrl: 'example-dialog.component.html'
})
export class ExampleDialogComponent implements OnInit {
  public title: string = 'Info';
  public infoItems: Array<InfoItem> = [];
  public exampleItems: Array<InfoExampleItem> = [];

  constructor(
    public dialogRef: MatDialogRef<ExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public ngOnInit(): void {
    this.infoItems = [
      new InfoItem(
        1,
        1,
        InfoType.GeneralInformation,
        'What is Employee Feedback?',
        "Employee feedback is information given about a person's actions at work, to be used as a guide for future improvement"
      ),
      new InfoItem(
        2,
        1,
        InfoType.GeneralInformation,
        'Why do we give feedback?',
        'Feedback has a direct impact on our work:<br/> Gives us specific information to help usimprove <br/> Makes performance expectations clear from the start <br/> Heightens efficiency by reducing resentment, buildup, etc. (br/> Strengthens relationships'
      ),
      new InfoItem(3, 1, InfoType.GeneralInformation, 'Positive Feedback', ''),
      new InfoItem(
        4,
        1,
        InfoType.GeneralInformation,
        'Benifits of Positive Feedback',
        'Usedto recognize specific job performance that has met and/or exceeded expectations <br/> Reinforces and motivates.'
      ),
      new InfoItem(
        5,
        1,
        InfoType.GeneralInformation,
        'Developmental Feedback',
        'Gives clarity to the employee about good performance <br/> Creates enthusiasm <br/> Builds confidence and self-esteem <br/> Increases appropriate risk-takingand innovation <br/> Demonstrates care and involvement <br/> Makes an employee feelacknowledged'
      ),
      new InfoItem(
        6,
        1,
        InfoType.GeneralInformation,
        'Benifits of Developmental Feedback',
        'Used to help an employee monitor and correct his or her own behavior'
      ),
      new InfoItem(
        7,
        1,
        InfoType.WhatToSay,
        'State your expectations',
        'Lets people know how to execute a task more effectively <br/> Steers actions;communicates what needs to change <br/> Increases the persons self-awareness <br/> Gives a bigger picture to the employee'
      ),
      new InfoItem(
        8,
        1,
        InfoType.WhatToSay,
        'Describe your observations',
        'Describe the standards or ,expectations you have for the situation. <br/> Make them SMART (specific,measurable,achievable,relevant, time-bound). '
      ),
      new InfoItem(9, 1, InfoType.WhatToSay, 'Share your assessment', ''),
      new InfoItem(10, 1, InfoType.WhatToSay, 'Explain consequences', ''),
      new InfoItem(11, 1, InfoType.WhatToDo, 'Keep it private', ''),
      new InfoItem(
        12,
        1,
        InfoType.WhatToDo,
        'Be direct- from sender to receiver',
        ''
      ),
      new InfoItem(13, 1, InfoType.WhatToDo, 'Make it a conversation', ''),
      new InfoItem(14, 1, InfoType.WhatToDo, 'Check for clarity', ''),
      new InfoItem(15, 1, InfoType.WhatToAvoid, 'Surprises', ''),
      new InfoItem(16, 1, InfoType.WhatToAvoid, 'Comparing people', '')
    ];

    this.exampleItems = [
      new InfoExampleItem(1, 7, ExampleType.good, ''),
      new InfoExampleItem(2, 8, ExampleType.good, ''),
      new InfoExampleItem(3, 9, ExampleType.good, ''),
      new InfoExampleItem(4, 10, ExampleType.good, ''),
      new InfoExampleItem(5, 7, ExampleType.bad, ''),
      new InfoExampleItem(6, 8, ExampleType.bad, ''),
      new InfoExampleItem(7, 9, ExampleType.bad, ''),
      new InfoExampleItem(8, 10, ExampleType.bad, '')
    ];
  }
}
