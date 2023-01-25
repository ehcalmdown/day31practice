import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  title= "employee page";
  // visible =true;

  number1 = 12;
  number2 = 20;

  visible= this.ShowContent(this.number1 , this.number2);
  color: any;

  IsVisible = true;

  ShowContent(val1: number, val2:number):boolean{
    if(val1 < val2){
      return true;
    }
    else{
      return false;
    }

  }
  Onchange(arg: any){
    this.IsVisible=arg;
  };

  SetColor(event: any){
    this.color = event.target.value;
  }


  Employee: any[] = [];

  constructor(){
    this.Employee = [
      {
        Name: 'Ah Gau',
        Age: '21',
        Gender: 'None'
      },{
        Name: 'Jimmy',
        Age: '23',
        Gender: 'faggot'

      }
    ]
  }

  GetMoreEmployee() : void{
    this.Employee=[
      {
        Name: 'Ah LIAM',
        Age: '13',
        Gender: 'None'
      },
      {
        Name: 'Ah ZHUI',
        Age: '21',
        Gender: 'None'
      },
      {
        Name: 'Ah HAI',
        Age: '23',
        Gender: 'None'
      },
      {
        Name: 'Ah DING',
        Age: '11',
        Gender: 'None'
      },
      {
        Name: 'Ah BUI',
        Age: '12',
        Gender: 'None'
      }

    ]
  }

  TrackByEmployeeName(index:number, employee:any,):string{
    return employee.Name;
  }

  CheckAge(Age:number){
    let val = Age < 18 ? 'Under 18':'Above 18';

    switch(val){
      case 'Under 18':
      return 'red';
      case 'Above 18':
      return 'green';
    }

    return "";
  }


  GetCss(isEven: any){
    if(isEven){
      return 'color1';

    }
    else{
      return 'color2';
    }
  }

}
