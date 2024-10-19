import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';
 
interface content_zodiaco{
  nombre:string,
  apaterno:string,
  amaterno:string,
  nacimiento_dia:number,
  nacimiento_mes:number,
  nacimiento_anio:number,
  sexo:number,
}
 
@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styles: ``
})
export default class ZodiacoComponent {
  formGroup!:FormGroup;
  signo!:string;
  img!:string;
  edad!:number;
 
  zodiaco:content_zodiaco={
    nombre:'',
    apaterno:'',
    amaterno:'',
    nacimiento_dia:0,
    nacimiento_mes:0,
    nacimiento_anio:0,
    sexo:0
  }
 
  constructor(private fb:FormBuilder){
 
  }
 
  ngOnInit(): void {
    this.formGroup = this.initForm();
  }
 
  initForm():FormGroup{
    return this.fb.group({
      nombre:[''],
      apaterno:[''],
      amaterno:[''],
      nacimiento_dia:[''],
      nacimiento_mes:[''],
      nacimiento_anio:[''],
      sexo:[''],
    })
  }
 
  onSubmit():void{
    this.zodiaco = this.formGroup.value;
    this.edad = this.getAge(Number(this.zodiaco.nacimiento_anio), Number(this.zodiaco.nacimiento_mes), Number(this.zodiaco.nacimiento_dia));
    this.signo = this.getChineseZodiac(Number(this.zodiaco.nacimiento_anio));
  }
 
  getAge(anio: number, mes:number, dia:number): number {
    const hoy = new Date();
    const fechacompleta = new Date(anio, mes - 1, dia);
    let age = hoy.getFullYear() - fechacompleta.getFullYear();
 
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    if (mesActual < (mes - 1) || (mesActual === (mes - 1) && diaActual < dia)) {
      age--;
    }
 
    return age;
  }
  getChineseZodiac(year: number): string {
    if ([1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020].includes(year)) {
      this.img = 'rata.png';
      return 'Rata';
    } else if ([1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021].includes(year)) {
      this.img = 'buey.png';
      return 'Buey';
    } else if ([1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022].includes(year)) {
      this.img = 'tigre.png';
      return 'Tigre';
    } else if ([1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023].includes(year)) {
      this.img = 'conejo.png';
      return 'Conejo';
    } else if ([1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024].includes(year)) {
      this.img = 'dragon.png';
      return 'Dragón';
    } else if ([1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025].includes(year)) {
      this.img = 'serpiente.png';
      return 'Serpiente';
    } else if ([1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026].includes(year)) {
      this.img = 'caballo.png';
      return 'Caballo';
    } else if ([1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027].includes(year)) {
      this.img = 'cabra.png';
      return 'Cabra';
    } else if ([1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028].includes(year)) {
      this.img = 'mono.png';
      return 'Mono';
    } else if ([1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029].includes(year)) {
      this.img = 'gallo.png';
      return 'Gallo';
    } else if ([1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030].includes(year)) {
      this.img = 'perro.png';
      return 'Perro';
    } else if ([1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031].includes(year)) {
      this.img = 'cerdo.png';
      return 'Cerdo';
    } else {
      this.img = '';
      return 'Año no válido';
 
    }
  }
 
  buscar_zodiaco():void{
  }
}