import {Component, OnInit} from '@angular/core';
import {CurrencyExchangesService} from "../services/exchenge-rates.service";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  amount = 1;
  from = 'USD';
  to = 'UAH';
  rates!: { [key: string]: number };

  constructor(private service: CurrencyExchangesService) {
  }

  convert(): number {
    return this.amount * this.rates[this.to];
  }

  loadRates() {
    this.service.getRates(this.from).subscribe(res => this.rates = res.rates);
  }

  getAllCurrencies(): string[] {
    return Object.keys(this.rates);
  }

  ngOnInit(): void {
    this.loadRates();
  }

}
