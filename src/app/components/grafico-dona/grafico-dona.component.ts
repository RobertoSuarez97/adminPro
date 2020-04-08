import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ],
})
export class GraficoDonaComponent implements OnInit {

  @Input() doughnutChartData = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  @Input() doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() doughnutChartType = 'doughnut';
  @Input() leyenda = 'leyenda';
  constructor() { }

  ngOnInit(): void {
  }

}
