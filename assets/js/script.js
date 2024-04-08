
function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes;
  }
   Consultorio.prototype.getNombre = function() {
      return this.nombre;
    }
    
    Consultorio.prototype.setNombre = function(nombrenuevo) {
      this.nombre = nombrenuevo;
    }
  
    Consultorio.prototype.getPacientes = function() {
      return this.pacientes;
    }
    
    Consultorio.prototype.setPacientes = function(newPacientes) {
      this.pacientes = newPacientes;
    }
  
    //Método para mostrar paciente por cada nombre
    Consultorio.prototype.buscarPorNombre = function(nombre) {
      return this.pacientes.filter(function(paciente) {
      return paciente.getNombre() === nombre;
        });
      };
  
  //Método para mostrar todos los pacientes
      Consultorio.prototype.mostrarTodosPacientes = function() {
          return this.pacientes.map(function(paciente) {
        return {
        Nombre: paciente.getNombre(),  
        Edad: paciente.getEdad(), 
        Rut: paciente.getRut(),
        Diagnostico: paciente.getDiagnostico()
            };
          });
        };
  
  function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
  }
  
  Paciente.prototype.getNombre = function(){
      return this.nombre;
      };
      
  Paciente.prototype.setNombre = function(nuevoNombre){
      this.nombre= nuevoNombre;
  };
  
  Paciente.prototype.getEdad = function(){
      return this.edad;
  };
  Paciente.prototype.setEdad = function(edadNueva){
      this.edad= edadNueva;
  };
  
  Paciente.prototype.getRut = function () {
    return this.rut;
  };
  
  Paciente.prototype.setRut = function(nuevoRut){
      this.rut = nuevoRut;
  };
  
  Paciente.prototype.getDiagnostico = function() {
      return this.diagnostico;
  };
  
  Paciente. prototype.setDiagnostico = function(nuevoDiagnostico){
      this.diagnostico= nuevoDiagnostico;
  };
  
  
  
  var pacienteUno = new Paciente('Luis', 38, '15453256-5', 'Hipocondriaco');
  var pacienteDos = new Paciente('Matias', 33, '15423256-5', 'Céfalea');
  var pacienteTres = new Paciente('sofia', 40, '12345678-9', 'Estres');
  var consultorio = new Consultorio('Consultorio Médico La Reina', [pacienteUno, pacienteDos, pacienteTres]);
  
  console.log(consultorio);