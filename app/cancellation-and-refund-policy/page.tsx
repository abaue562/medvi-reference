import LegalPage from "../components/LegalPage";

export default function CancellationAndRefundPolicy() {
  return (
    <LegalPage
      title="Política de Cancelación y Reembolso"
      sections={[
        {
          heading: "Servicios de Suscripción",
          level: 2,
          body: [
            `Su membresía en el programa de suscripción ("Servicio de Suscripción"), incluida su capacidad de acceder a los servicios, comienza cuando ha completado el formulario de incorporación, momento en el que se le cobrará el primer mes del Servicio de Suscripción.`,
            "El Servicio de Suscripción incluye acceso a proveedores, medicamentos cuando corresponda y soporte en línea.",
            "Tenga en cuenta que si nuestro proveedor médico le descalifica por alguna razón médica, recibirá un reembolso completo.",
            "No se garantizan resultados ni efectividad por su participación en el Servicio de Suscripción.",
          ],
        },
        {
          heading: "Política de Cancelación",
          level: 2,
          body: [
            "Puede cancelar su Servicio de Suscripción en cualquier momento y por cualquier motivo. Para cancelar su Servicio de Suscripción, comuníquese con servicio al cliente (hola@clinicarenova.org) y solicite la cancelación, o a través de la función de chat en su portal de pacientes.",
            "Para garantizar un proceso fluido, requerimos que su solicitud de cancelación se reciba al menos 72 horas antes de su fecha de facturación. Si no se cumple este plazo, se le cobrará la suscripción en la próxima fecha de facturación y la cancelación entrará en vigor en la siguiente fecha de facturación.",
            "Después de la cancelación, continuará recibiendo el Servicio de Suscripción hasta el final de su ciclo de facturación.",
            "Consulte nuestra Política de Reembolso a continuación para determinar si tiene derecho a un reembolso por la cancelación de su Servicio de Suscripción.",
          ],
        },
        {
          heading: "Política de Reembolso",
          level: 3,
          body: [
            "Si su Servicio de Suscripción se cancela por descalificación de nuestro proveedor médico, se le emitirá un reembolso por el resto de los cargos del Servicio de Suscripción posteriores a la descalificación.",
            "Salvo la cancelación por descalificación médica, EN NINGÚN CASO SE LE EMITIRÁ UN REEMBOLSO AL CANCELAR EL SERVICIO DE SUSCRIPCIÓN.",
            "La ley federal generalmente prohíbe la devolución de medicamentos recetados a farmacias para su reembolso o reutilización una vez que han sido ordenados a un paciente, con el fin de proteger la salud y seguridad pública. Esta política garantiza que todos los medicamentos proporcionados sean manejados y dispensados con el mayor cuidado y cumplimiento normativo. Si se aprueba, los reembolsos solo se emitirán por su ciclo de facturación más reciente y no se emitirán por ciclos de facturación anteriores.\n\nArtículos dañados o incorrectos: Inspeccione su medicamento inmediatamente al recibirlo. Si el medicamento parece estar dañado o es incorrecto, comuníquese de inmediato con servicio al cliente a hola@clinicarenova.org.\n\nArtículos dañados: Los artículos dañados pueden ser reemplazados por la farmacia previa presentación de evidencia del daño.\n\nArtículos incorrectos: Los medicamentos incorrectos serán reemplazados por la farmacia.",
          ],
        },
        {
          heading: "Preguntas Frecuentes sobre el Servicio de Suscripción",
          level: 3,
          body: [],
        },
        {
          heading: "¿Qué incluye el precio de mi Servicio de Suscripción?",
          level: 3,
          body: [
            "Su Servicio de Suscripción representa un precio único por la suscripción adquirida. Esto puede incluir consultas tanto en vivo como mediante formularios electrónicos y revisiones con un Proveedor para medicamentos dispensados a través de una farmacia u otros servicios de salud sobre los que cobramos pagos, servicios de laboratorio, apoyo en el cuidado, línea de soporte al paciente 24/7 y otros servicios para apoyar su proceso de pérdida de peso médica. Los servicios, laboratorios y medicamentos cubiertos con el precio único del Servicio de Suscripción pueden variar.",
          ],
        },
        {
          heading: "¿Qué ocurre si mi proveedor determina que ya no soy elegible para el Servicio de Suscripción?",
          level: 3,
          body: [
            "Si su Proveedor determina que ya no es elegible para el Servicio de Suscripción, su suscripción será cancelada y es posible que se emita un reembolso. Si tiene preguntas o inquietudes sobre una cancelación por inelegibilidad, comuníquese con nuestro servicio al cliente a hola@clinicarenova.org.",
            "Salvo lo indicado de otra manera en este documento, los Términos y Condiciones de ClínicaRenova rigen la Política de Cancelación y Reembolso del Servicio de Suscripción. https://clinicarenova.org/terms-and-conditions",
            "En todos los casos, usted es responsable de todos los honorarios por servicios y servicios de atención médica prestados. Esta Política de Cancelación y Reembolso del Servicio de Suscripción rige únicamente los honorarios del Servicio de Suscripción.",
          ],
        },
      ]}
    />
  );
}
