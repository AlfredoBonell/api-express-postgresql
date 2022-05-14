const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Cors
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOption));


// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.json({ message: "alive" });
});

app.get("/explorers", async (req, res) => {
  const allExplorers = await prisma.explorer.findMany({});
  res.json(allExplorers);
});

app.get("/explorers/:id", async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(explorer);
});

app.post("/explorers", async (req, res) => {
  const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission,
  };
  const message = "Explorer creado.";
  await prisma.explorer.create({ data: explorer });
  return res.json({ message });
});

app.put("/explorers/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  await prisma.explorer.update({
    where: {
      id: id,
    },
    data: {
      mission: req.body.mission,
    },
  });

  return res.json({ message: "Actualizado correctamente" });
});

app.delete("/explorers/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.explorer.delete({ where: { id: id } });
  return res.json({ message: "Eliminado correctamente" });
});

app.get("/Mission", async (req, res) => {
  const allMission = await prisma.Mission.findMany({});
  res.json(allMission);
});

app.get("/Mission/:id", async (req, res) => {
  const id = req.params.id;
  const mission = await prisma.Mission.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(mission);
});

app.post("/Mission", async (req, res) => {
  const mission = {
    name: req.body.name,
    lang: req.body.lang,
    missionCommander: req.body.missionCommander,
    enrollments: req.body.enrollments,
    hasCertification: req.body.hasCertification,
  };
  const message = "Mission creado.";
  await prisma.Mission.create({ data: mission });
  return res.json({ message });
});

app.put("/Mission/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  await prisma.Mission.update({
    where: {
      id: id,
    },
    data: {
      lang: req.body.lang,
    },
  });

  return res.json({ message: "Actualizado correctamente" });
});

app.delete("/Mission/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.Mission.delete({ where: { id: id } });
  return res.json({ message: "Eliminado correctamente" });
});

app.get("/missionCommander", async (req, res) => {
  const allMissionComander = await prisma.missionCommander.findMany({});
  res.json(allMissionComander);
});

app.get("/missionCommander/:id", async (req, res) => {
  const id = req.params.id;
  const missionComander = await prisma.missionCommander.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(missionComander);
});

app.post("/missionCommander", async (req, res) => {
  const missionCommander = {
    name: req.body.name,
    username: req.body.username,
    mainStack: req.body.mainStack,
    currentEnrollment: req.body.currentEnrollment,
    hasAzureCertification: req.body.hasAzureCertification,
  };
  const message = "Mission Comander creado.";
  await prisma.missionCommander.create({ data: missionCommander });
  return res.json({ message });
});

app.put("/missionCommander/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  await prisma.missionCommander.update({
    where: {
      id: id,
    },
    data: {
      mainStack: req.body.mainStack,
    },
  });

  return res.json({ message: "Actualizado correctamente" });
});

app.delete("/missionCommander/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.missionCommander.delete({ where: { id: id } });
  return res.json({ message: "Eliminado correctamente" });
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
