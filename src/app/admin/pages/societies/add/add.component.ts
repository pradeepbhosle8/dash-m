import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  societyForm: FormGroup;
  submitted = false;
  isNonTrade: boolean = false
  checkAllNonTrades: boolean = false


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setSocietyFormValidation();
  }

 

  setSocietyFormValidation() {
    this.societyForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone_number: new FormControl('', Validators.required),
      registration_no: new FormControl('', Validators.required),
      gstin: new FormControl('', Validators.required),
      openingbalance: new FormControl('', Validators.required),
      noofflats: new FormControl('', Validators.required),
      billday: new FormControl('', Validators.required),
      dueday: new FormControl('', Validators.required),
      InterestType: new FormControl('', Validators.required),
      InterestSpan: new FormControl('', Validators.required),
      Interest_Rate: new FormControl('', Validators.required),
      Noc_Charge: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
      // bill_payment: new FormControl('', Validators.required),
      // accounting: new FormControl('', Validators.required),
      // gatekeeper: new FormControl('', Validators.required),
      // vms: new FormControl('', Validators.required)
      // myCheckboxGroup: new FormGroup({
      //   myCheckbox1: new FormControl(false),
      //   myCheckbox2: new FormControl(false),
      //   myCheckbox3: new FormControl(false),
      // }, requireCheckboxesToBeCheckedValidator()),
    })
  }

  get f() { return this.societyForm.controls; }

  nontrade =[
    {label: 'Bill & Payments', selected: true},
    {label: 'Accounting', selected: true},
    {label: 'Gatekeeper', selected: true},
    {label: 'Visitor Management', selected: true},
  ];

  changeTradesByCategory(event:any) {
  

    if (event.target.name == 'nontrades') {
      this.isNonTrade = true
    }

    if (this.isNonTrade && this.checkAllNonTrades) {
      event.target.checked = true
    }

  
  }

  allNonTrades(event:any) {
    const checked = event.target.checked;
    this.nontrade.forEach(item => item.selected = checked);
  }

  


  onnewSocietyForm() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.societyForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.societyForm.value))
}


}
