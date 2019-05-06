const fillDataBase = (fichier) => {
  return new Promise((res, err) => {
    const { spawn } = require('child_process');
    const pyProg = spawn('python', ['server/pythonCode/Dijkstra.py', fichier]);
    pyProg.stdout.on('data', function(data) {
        res(data.toString());
    });
  })
};

module.exports = {
    fillDataBase,
}
