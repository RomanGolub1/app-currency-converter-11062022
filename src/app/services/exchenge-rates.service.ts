import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExchangeRatesResponse} from "./payloads/exchange-rates-response";


@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangesService {
  constructor(private http: HttpClient) {
  }

  getRates(url: string): Observable<ExchangeRatesResponse>{
    return this.http.get<ExchangeRatesResponse>(`https://api.exchangerate.host/latest?base=${url}`)
  }
}
