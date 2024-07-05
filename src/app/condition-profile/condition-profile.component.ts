import { Component, OnInit, ViewChild } from '@angular/core';
import { ConditionProfileService } from '../services/condition-profile.service';
import { ConditionProfileDto } from '../dto/condition_profile';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-condition-profile',
  templateUrl: './condition-profile.component.html',
  styleUrls: ['./condition-profile.component.css'],
})
export class ConditionProfileComponent implements OnInit {
  CONDITION_PROFILE_DATA: ConditionProfileDto[] = [
    new ConditionProfileDto('01', 'test'),
    new ConditionProfileDto('02', 'test'),
    new ConditionProfileDto('03', 'test'),
    new ConditionProfileDto('04', 'test'),
    new ConditionProfileDto('05', 'test'),
    new ConditionProfileDto('06', 'test'),
    new ConditionProfileDto('07', 'test'),
    new ConditionProfileDto('08', 'test'),
    new ConditionProfileDto('09', 'test'),
    new ConditionProfileDto('10', 'test'),
    new ConditionProfileDto('11', 'test'),
  ];
  private conditionProfiles = [];
  displayedColumns: string[] = ['code', 'name', 'actions'];
  dataSource = new MatTableDataSource<ConditionProfileDto>(
    this.CONDITION_PROFILE_DATA
  );
  constructor(
    private conditionProfileService: ConditionProfileService,
    private dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngOnInit(): void {
    // this.getConditionProfiles();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getConditionProfiles() {
    this.conditionProfileService
      .getConditionProfile('')
      .subscribe((response) => {
        this.conditionProfiles = response;
      });
  }

  onDelete(code: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {
        title: 'Delete Condition Profile',
        message: `Are you sure you want to delete item with code: ${code}?`,
        action: 'delete',
        code: code
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the result from the dialog
        console.log('Delete result:', result);
      }
    });
  }

  onEdit(code: string, element: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {
        title: 'Edit Condition Profile',
        message: 'Edit the item details below:',
        action: 'edit',
        code: element.code,
        name: element.name,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the result from the dialog
        console.log('Edit result:', result);
      }
    });
  }
}
