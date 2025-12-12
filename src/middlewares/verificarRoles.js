export const EsAdmin = (req, res, next) => {
  console.log(req.usuario);
  console.log(req.usuario.email);
  console.log(req.usuario.rol);
  if (!req.usuario)
    return res.status(401).json({ mensaje: "Usuario no autenticado" });

  if (!req.usuario.rol.includes("Administrador")) {
    return res
      .status(403)
      .json({ mensaje: "Acceso bloqueado no posee permisos de administrador" });
  }
  next();
};
