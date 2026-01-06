export default function handler(req, res) {
  const { nick } = req.query;

  if (!nick) {
    return res.status(400).json({
      valido: false,
      temporestante: 0
    });
  }

  // 🔒 BASE SIMPLES DE USUÁRIOS (hardcoded)
  const usuarios = {
    play7: {
      valido: true,
      temporestante: 180
    },
    guel: {
      valido: true,
      temporestante: 0
    }
  };

  const usuario = usuarios[nick.toLowerCase()];

  if (!usuario) {
    return res.json({
      nick,
      valido: false,
      temporestante: 0
    });
  }

  return res.json({
    nick,
    valido: usuario.valido,
    temporestante: usuario.temporestante
  });
}
