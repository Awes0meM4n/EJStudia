//Estudiante
class Estudiante {
  constructor(){
    this.estudio = 60;
    this.estudioMax = 140;
    this.apretando = false;
    this.agobio = 5;
    this.desmotivacion = 1;
    this.intervaloRefresco = 100;
    this.horasDeClase = 0;

    this.actualizarEstudio = () => {
      this.estudiar();
      this.atenderEnClase();
    };

    this.iniciarControlDeEstudio();
  }

  estudioMaximo() {
      return this.estudioMax;
  }

  iniciarControlDeEstudio(){
    this.idDecelerar = setInterval(this.actualizarEstudio, this.intervaloRefresco);
  }

  estudiar() {
    let nuevaestudio = this.estudio - this.desmotivacion + ((this.apretando)?this.agobio:0);
    if(nuevaestudio > this.estudioMaximo())
      nuevaestudio = this.estudioMaximo();
    if(nuevaestudio <= 0){
      nuevaestudio = 0;
      clearInterval(this.idDecelerar);
      this.idDecelerar = null;
    }
    this.estudio = nuevaestudio;
  };

  parar(){
    this.apretando = false;
    this.estudio = 0;
  }

  //Control de agobio
  apretarLosCodos() {
    this.apretando = true;
    if(!this.idDecelerar)
      this.iniciarControlDeEstudio();
  }
  relajarse() {
    this.apretando = false;
  }

  atenderEnClase(){
    this.horasDeClase += this.estudio * this.intervaloRefresco / 1000;
  }
}

//Aguja Estudiometro: usando http://bernii.github.io/gauge.js/
var opts = {
  angle: -0.2, // The span of the gauge arc
  lineWidth: 0.2, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.54, // // Relative to gauge radius
    strokeWidth: 0.038, // The thickness
    color: '#000000' // Fill color
  },
  limitMax: true,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  colorStart: '#6F6EA0',   // Colors
  colorStop: '#C0C0DB',    // just experiment with them
  strokeColor: '#EEEEEE',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support
  staticLabels: {
    font: "10px sans-serif",  // Specifies font
    labels: [0, 20, 40, 110, 120, 140],  // Print labels at these values
    color: "#000000",  // Optional: Label text color
    fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
  staticZones: [
    {strokeStyle: "#F03E3E", min: 0, max: 20}, // Red from 100 to 130
    {strokeStyle: "#FFDD00", min: 20, max: 40}, // Yellow
    {strokeStyle: "#30B32D", min: 40, max: 100}, // Green
    {strokeStyle: "#FFDD00", min: 100, max: 120}, // Yellow
    {strokeStyle: "#F03E3E", min: 120, max: 140}  // Red
  ],
};

var gauge;
function crearAguja() {
  let target = document.querySelector('#gauge'); // your canvas element
  gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 140; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(0); // set actual value
}