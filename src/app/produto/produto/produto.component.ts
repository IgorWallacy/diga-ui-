import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private service:ProdutoService) { }

  produtos = [];
  cols : any[];
  exportColumns: any[];
  
  exportarResende(){

    this.service.sendGetRequestResende().subscribe((data: any[])=>{
      //console.log(data);
      this.produtos = data;
    })  

  }

  exportarVoltaRedonda() {

    this.service.sendGetRequestVoltaRedonda().subscribe((data: any[])=>{
      
      this.produtos = data;
    })  

  }

  ngOnInit(): void {

   


    this.cols = [
      {field :  'codigo', header: 'Codigo'},
      {field: 'ean' ,header: 'Barras'},
      { field: 'nome', header: 'Nome' },
      { field: 'preco', header: 'Preco' }
  ];

  this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
}

    }

  


