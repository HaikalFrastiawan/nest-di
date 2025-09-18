import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService){}

    compute(a: number, b: number){
        console.log('Cpu membutuhkan 10 watt untuk menghitung');
        this.powerService.supplyPower(10,'Cpu')
        return a + b;   
    }
}
