const http = require('http');

const data = {
  students: [], teachers: [], attendance: [], marks: []
};
const nextId = { students: 1, teachers: 1, attendance: 1, marks: 1 };

const server = http.createServer(async (req, res) => {
  const send = (status, result) => {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  };

  try {
    const url = new URL(req.url, 'http://localhost');
    const parts = url.pathname.split('/').filter(Boolean);
    const type = parts[0];
    const id = parts[1] ? Number(parts[1]) : null;

    if (!Object.prototype.hasOwnProperty.call(data, type))
      return send(404, { error: 'Module not found' });

    if (req.method === 'GET' && !id) return send(200, data[type]);

    if (req.method === 'POST' && !id) {
      let body = '';
      for await (const chunk of req) body += chunk;
      const item = JSON.parse(body);
      if (!item || typeof item !== 'object' || Array.isArray(item) || !Object.keys(item).length)
        return send(400, { error: 'Enter valid details' });
      item.id = nextId[type]++;
      data[type].push(item);
      return send(201, item);
    }

    const index = data[type].findIndex(item => item.id === id);
    if (!Number.isInteger(id) || index < 0)
      return send(404, { error: 'Record not found' });

    if (req.method === 'GET') return send(200, data[type][index]);

    if (req.method === 'PUT') {
      let body = '';
      for await (const chunk of req) body += chunk;
      const updates = JSON.parse(body);
      if (!updates || typeof updates !== 'object' || Array.isArray(updates))
        return send(400, { error: 'Enter valid details' });
      delete updates.id;
      data[type][index] = { ...data[type][index], ...updates };
      return send(200, data[type][index]);
    }

    if (req.method === 'DELETE') {
      data[type].splice(index, 1);
      return send(200, { message: 'Record deleted' });
    }

    return send(405, { error: 'Method not allowed' });
  } catch {
    return send(400, { error: 'Invalid JSON or request' });
  }
});

server.listen(3004, () => console.log('Student API running at http://localhost:3004'));
