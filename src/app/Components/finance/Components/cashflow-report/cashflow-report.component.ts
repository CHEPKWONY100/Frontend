import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cashflow-report',
  templateUrl: './cashflow-report.component.html',
  styleUrls: ['./cashflow-report.component.scss']
})
export class CashflowReportComponent implements OnInit {
  // Mock data for the cash flow statement
  cashFlowData = {
    operations: {
      details: [
        { description: 'Income generated from other operating activities', amount: 2315, previousamt: 5345 },
        { description: 'Income taxes paid', amount: (258), previousamt: (3326) },
        { description: 'Net cash generated from other operating activities', amount: (2573), previousamt: (8761) }
      ]
    },
    investments: {
      // netCash: -50000,
      details: [
        { description: 'Net cash utilised in investing activities', amount: (41), previousamt: (5213) },
        { description: 'Purchase of property and equipment', amount: (1048), previousamt: (2624) },
        { description: 'Purchase of intangible assets', amount: (2774), previousamt: (2881) },
        { description: 'Proceeds from sale of non-current assets held for sale', amount: 3601, previousamt: 50 },
        { description: 'Net cash generated from other investing activities', amount: 180, previousamt: 242 }
      ]
    },
    financing: {
      details: [
        { description: 'Net cash generated from/(utilised) financing activities', amount: (3337), previousamt: (334) },
        { description: 'Issue of additional Tier 1 capital', amount: 1209, previousamt: 3054 },
        { description: 'Proceeds from borrowed funds', amount: 2676, previousamt: 1580 },
        { description: 'Repayment of borrowed funds', amount: (3733), previousamt: (500) },
        { description: 'Dividends paid', amount: (2307), previousamt: (2841) },
        { description: 'Net cash utilised in other financing activities', amount: (1182), previousamt: (1627) }
      ]
    },
    increment: {
      details: [
        { description: 'Net decrease in cash and cash equivalents', amount: (1063), previousamt: (112) },
        { description: 'Cash and cash equivalents at the beginning of the reporting period 1', amount: 9846, previousamt: 9958 },
        { description: 'Cash and cash equivalents at the beginning of the reporting period 2', amount: 8783, previousamt: 9846 },

      ]
    },
  };

  constructor() { }

  ngOnInit(): void {


    //any
  }
  downloadcashflowstatement() { }

}
