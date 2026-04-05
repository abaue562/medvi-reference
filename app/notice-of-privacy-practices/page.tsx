import LegalPage from "../components/LegalPage";

export default function NoticeOfPrivacyPractices() {
  return (
    <LegalPage
      title="Aviso de Prácticas de Privacidad"
      lastUpdated="1 de enero de 2024"
      sections={[
        {
          body: [
            "ESTE AVISO DESCRIBE CÓMO PUEDE USARSE Y DIVULGARSE LA INFORMACIÓN MÉDICA SOBRE USTED Y CÓMO PUEDE ACCEDER A DICHA INFORMACIÓN. POR FAVOR LÉALO DETENIDAMENTE.",
            `Este Aviso de Prácticas de Privacidad ("Aviso") describe las prácticas de privacidad de ClínicaRenova, LLC y sus filiales, incluidas ciertas entidades profesionales afiliadas, sus médicos, profesionales de la salud y demás personal ("nosotros" o "nos").`,
          ],
        },
        {
          heading: "I. Quiénes Somos",
          level: 2,
          body: [],
        },
        {
          heading: "II. Nuestras Obligaciones de Privacidad",
          level: 2,
          body: [
            `La ley nos exige mantener la privacidad de su información de salud ("Información de Salud Protegida" o "PHI") y proporcionarle este Aviso sobre nuestras obligaciones legales y prácticas de privacidad con respecto a su PHI. También estamos obligados a notificarle en caso de una Violación de PHI no asegurada. Cuando usamos o divulgamos su PHI, debemos cumplir con los términos de este Aviso (o del aviso vigente en el momento del uso o la divulgación).`,
          ],
        },
        {
          heading: "III. Usos y Divulgaciones Permitidos Sin Su Autorización Escrita",
          level: 3,
          body: [
            "En ciertas situaciones, que describimos en la Sección IV a continuación, debemos obtener su autorización escrita para usar y/o divulgar su PHI. Sin embargo, no necesitamos ningún tipo de autorización para los siguientes usos y divulgaciones:",
          ],
        },
        {
          heading: "A. Usos y Divulgaciones para Tratamiento, Pago y Operaciones de Atención Médica.",
          level: 3,
          body: [
            `Podemos usar y divulgar PHI, pero no su "Información Altamente Confidencial" (definida en la Sección IV.B a continuación), para tratarle, obtener pago por los servicios que le prestamos y llevar a cabo nuestras "Operaciones de Atención Médica" como se detalla a continuación:`,
            "Tratamiento. Podemos usar y divulgar su PHI para brindar tratamiento; por ejemplo, para diagnosticar y tratar su lesión o enfermedad. También podemos divulgar PHI a otros proveedores de atención médica involucrados en su tratamiento.",
            "Pago. En la mayoría de los casos, podemos usar y divulgar su PHI para obtener pago por los servicios que le prestamos.",
            "Operaciones de Atención Médica. Podemos usar y divulgar su PHI para nuestras operaciones de atención médica, que incluyen administración interna, planificación y diversas actividades que mejoran la calidad y rentabilidad de la atención que le brindamos. Por ejemplo, podemos usar PHI para evaluar la calidad y competencia de nuestros médicos y otros profesionales de la salud. También podemos divulgar PHI para resolver cualquier queja que pueda tener. Asimismo, podemos divulgar PHI a sus otros proveedores de atención médica cuando sea necesaria para que le traten, reciban pago por los servicios que le prestan o lleven a cabo ciertas operaciones de atención médica, como actividades de evaluación y mejora de la calidad, revisión de la competencia de los profesionales de la salud, o para la detección o cumplimiento relacionados con el fraude en atención médica.",
          ],
        },
        {
          heading: "B. Divulgación a Familiares, Amigos Cercanos y Otros Cuidadores.",
          level: 3,
          body: [
            "Podemos usar o divulgar su PHI a un familiar, otro pariente, un amigo íntimo o cualquier otra persona que usted identifique cuando esté presente durante la divulgación o cuando exista disponibilidad previa a ella, si (1) obtenemos su acuerdo; (2) le damos la oportunidad de objetar la divulgación y no objeta; o (3) inferimos razonablemente que no se opone a la divulgación.",
            "Si no está presente, o si no es posible ofrecer la oportunidad de acordar u objetar una divulgación debido a su incapacidad o una situación de emergencia, podemos ejercer nuestro juicio profesional para determinar si la divulgación es en su mejor interés. Si divulgamos información a un familiar, otro pariente o un amigo íntimo, solo divulgaremos la información que creamos sea directamente relevante para la participación de esa persona en su atención médica o en el pago relacionado con ella. También podemos divulgar su PHI para notificar (o ayudar a notificar) a dichas personas sobre su ubicación, condición general o fallecimiento.",
          ],
        },
        {
          heading: "C. Actividades de Salud Pública.",
          level: 3,
          body: [
            "Podemos divulgar su PHI para las siguientes actividades de salud pública: (1) informar datos de salud a autoridades de salud pública con el fin de prevenir o controlar enfermedades, lesiones o discapacidades; (2) reportar el abuso y negligencia infantil a autoridades de salud pública u otras autoridades gubernamentales autorizadas por ley para recibir dichos informes; (3) informar datos sobre productos y servicios bajo la jurisdicción de la Administración de Alimentos y Medicamentos de los EE. UU.; (4) alertar a una persona que pueda haber estado expuesta a una enfermedad transmisible o que pueda estar en riesgo de contraer o propagar una enfermedad o condición; y (5) informar datos a su empleador según lo exijan las leyes que regulan enfermedades y lesiones relacionadas con el trabajo o la vigilancia médica en el lugar de trabajo.",
          ],
        },
        {
          heading: "D. Víctimas de Abuso, Negligencia o Violencia Doméstica.",
          level: 3,
          body: [
            "Si razonablemente creemos que usted es víctima de abuso, negligencia o violencia doméstica, podemos divulgar su PHI a una autoridad gubernamental, incluida una agencia de servicios sociales o de protección, autorizada por ley para recibir informes de dicho abuso, negligencia o violencia doméstica.",
          ],
        },
        {
          heading: "E. Actividades de Supervisión de Salud.",
          level: 3,
          body: [
            "Podemos divulgar su PHI a una agencia de supervisión de salud que supervise el sistema de atención médica y sea responsable de garantizar el cumplimiento de las reglas de los programas de salud del gobierno, como Medicare o Medicaid.",
          ],
        },
        {
          heading: "F. Procedimientos Judiciales y Administrativos.",
          level: 3,
          body: [
            "Podemos divulgar su PHI en el curso de un procedimiento judicial o administrativo en respuesta a una orden legal u otro proceso legal.",
          ],
        },
        {
          heading: "G. Agentes del Orden Público.",
          level: 3,
          body: [
            "Podemos divulgar su PHI a la policía u otros funcionarios encargados del cumplimiento de la ley según lo exija o permita la ley o en cumplimiento de una orden judicial o una citación de gran jurado o administrativa.",
          ],
        },
        {
          heading: "H. Fallecidos.",
          level: 3,
          body: [
            "Podemos divulgar su PHI a un médico forense, perito médico o director de pompas fúnebres según lo autorice la ley.",
          ],
        },
        {
          heading: "I. Investigación.",
          level: 3,
          body: [
            "Podemos usar o divulgar su PHI sin su consentimiento o autorización si una Junta de Revisión Institucional o una Junta de Privacidad aprueba una exención de autorización para la divulgación.",
          ],
        },
        {
          heading: "J. Salud o Seguridad.",
          level: 3,
          body: [
            "Podemos usar o divulgar su PHI para prevenir o disminuir una amenaza grave e inminente para la salud o la seguridad de una persona o del público.",
          ],
        },
        {
          heading: "K. Funciones Gubernamentales Especializadas.",
          level: 3,
          body: [
            "Podemos usar y divulgar su PHI a unidades del gobierno con funciones especiales, como las Fuerzas Armadas de los EE. UU. o el Departamento de Estado de los EE. UU., en determinadas circunstancias.",
          ],
        },
        {
          heading: "L. Compensación Laboral.",
          level: 3,
          body: [
            "Podemos divulgar su PHI según lo autorice y sea necesario para cumplir con las leyes estatales relacionadas con la compensación laboral u otros programas similares.",
          ],
        },
        {
          heading: "M. Según lo Exija la Ley.",
          level: 3,
          body: [
            "Podemos usar y divulgar su PHI cuando así lo exija cualquier otra ley no mencionada en las categorías anteriores.",
          ],
        },
        {
          heading: "IV. Usos y Divulgaciones que Requieren Su Autorización Escrita",
          level: 3,
          body: [],
        },
        {
          heading: "A. Uso o Divulgación con Su Autorización.",
          level: 3,
          body: [
            `Debemos obtener su autorización escrita para usos y divulgaciones de PHI con fines de marketing y divulgaciones que constituyan la venta de PHI. Además, otros usos y divulgaciones de PHI no descritos en este Aviso solo se realizarán cuando usted nos otorgue su permiso escrito en un formulario de autorización ("Su Autorización"). Por ejemplo, deberá completar y firmar un formulario de autorización antes de que podamos enviar su PHI a su compañía de seguros de vida o al abogado que representa a la otra parte en un juicio en el que usted esté involucrado.`,
          ],
        },
        {
          heading: "B. Usos y Divulgaciones de Su Información Altamente Confidencial.",
          level: 3,
          body: [
            `La ley federal y estatal exige protecciones de privacidad especiales para cierta información altamente confidencial sobre usted ("Información Altamente Confidencial"). Esta Información Altamente Confidencial puede incluir el subconjunto de su PHI que: (1) está relacionada con servicios de salud mental y discapacidades del desarrollo; (2) está relacionada con la prevención, tratamiento y derivación del abuso de alcohol y drogas; (3) está relacionada con pruebas, diagnósticos o tratamientos de VIH/SIDA; (4) está relacionada con enfermedades de transmisión sexual; (5) está relacionada con pruebas genéticas; (6) está relacionada con abuso y negligencia infantil; (7) está relacionada con el abuso doméstico de un adulto con discapacidad; o (8) está relacionada con agresión sexual. Para que podamos divulgar su Información Altamente Confidencial con un propósito distinto a los permitidos por la ley, debemos contar con Su Autorización.`,
          ],
        },
        {
          heading: "C. Revocación de Su Autorización.",
          level: 3,
          body: [
            "Puede retirar (revocar) su Autorización, o cualquier autorización escrita, relacionada con su Información Altamente Confidencial (excepto en la medida en que hayamos actuado en base a ella) entregando una declaración escrita al Oficial de Privacidad identificado a continuación. Se puede obtener un formulario de revocación escrita previa solicitud al Oficial de Privacidad.",
          ],
        },
        {
          heading: "V. Sus Derechos con Respecto a Su Información de Salud Protegida",
          level: 3,
          body: [],
        },
        {
          heading: "A. Para Más Información y Quejas.",
          level: 3,
          body: [
            "Si desea más información sobre sus derechos de privacidad, si le preocupa que hayamos violado sus derechos de privacidad, o si no está de acuerdo con una decisión que tomamos sobre el acceso a su PHI, puede comunicarse con nuestro Oficial de Cumplimiento y Privacidad. También puede presentar una queja llamando al (844) 357-3601. También puede presentar quejas por escrito ante el Director de la Oficina de Derechos Civiles del Departamento de Salud y Servicios Humanos de los EE. UU. A solicitud, el Oficial de Cumplimiento y Privacidad le proporcionará la dirección correcta del Director. No tomaremos represalias contra usted si presenta una queja ante nosotros o ante el Director.",
          ],
        },
        {
          heading: "B. Derecho a Solicitar Restricciones Adicionales.",
          level: 3,
          body: [
            "Tiene derecho a solicitar una restricción en los usos y divulgaciones de su PHI (1) con fines de tratamiento, pago y operaciones de atención médica, y (2) a personas (como un familiar, otro pariente, amigo íntimo o cualquier otra persona que usted identifique) involucradas en su atención o en el pago relacionado con ella. Por ejemplo, tiene derecho a solicitar que no divulguemos su PHI a un plan de salud con fines de pago u operaciones de atención médica, si dicha PHI se refiere únicamente a un artículo o servicio de atención médica en el que hemos participado y que ha sido pagado íntegramente de su bolsillo. A menos que la ley lo exija de otra manera, estamos obligados a cumplir con su solicitud de este tipo de restricción. Para todas las demás solicitudes de restricción de uso y divulgación de su PHI, no estamos obligados a acceder a su solicitud, pero intentaremos atender solicitudes razonables cuando sea apropiado. Si desea solicitar restricciones adicionales, obtenga un formulario de solicitud del Oficial de Cumplimiento y Privacidad y devuélvalo completado. Le responderemos posteriormente con una respuesta escrita.",
          ],
        },
        {
          heading: "C. Derecho a Recibir Comunicaciones Confidenciales.",
          level: 3,
          body: [
            "Puede solicitar, y atenderemos, cualquier solicitud escrita razonable para recibir su PHI por medios de comunicación alternativos o en ubicaciones alternativas.",
          ],
        },
        {
          heading: "D. Derecho a Inspeccionar y Copiar Su Información de Salud.",
          level: 3,
          body: [
            "Puede solicitar acceso a su expediente médico y registros de facturación que mantenemos para inspeccionarlos y solicitar copias. En circunstancias limitadas, podemos denegarle el acceso a una parte de sus registros. Si desea acceder a sus registros, solicite un Formulario de Autorización de Divulgación de Información al Oficial de Privacidad y envíe el formulario completado a hola@clinicarenova.org. Si solicita copias, le cobraremos una tarifa basada en el costo que incluye (1) mano de obra para copiar la PHI; (2) suministros para crear la copia en papel o el soporte electrónico si solicita una copia electrónica en medios portátiles; (3) nuestros costos de envío, si solicita que le enviemos las copias por correo; y (4) si acepta de antemano, el costo de preparar una explicación o resumen de la PHI.",
          ],
        },
        {
          heading: "E. Derecho a Solicitar la Modificación de Sus Registros.",
          level: 3,
          body: [
            "Tiene derecho a solicitar que modifiquemos la PHI que se encuentra en su expediente médico o en los registros de facturación. Si desea modificar sus registros, obtenga un Formulario de Solicitud de Modificación del Oficial de Cumplimiento y Privacidad y envíe el formulario completado a hola@clinicarenova.org. Cumpliremos con su solicitud a menos que consideremos que la información que se modificaría es precisa y completa u otras circunstancias especiales apliquen.",
          ],
        },
        {
          heading: "F. Derecho a Recibir un Registro de Divulgaciones.",
          level: 3,
          body: [
            "A solicitud, puede obtener un registro de ciertas divulgaciones de su PHI realizadas por nosotros durante cualquier período de tiempo anterior a la fecha de su solicitud, siempre que dicho período no exceda seis años. Si solicita un registro más de una vez en un período de doce (12) meses, le cobraremos una tarifa razonable por registros adicionales y le informaremos de antemano sobre cualquier tarifa para que tenga la oportunidad de retirar o modificar la solicitud.",
          ],
        },
        {
          heading: "G. Derecho a Recibir una Copia de Este Aviso.",
          level: 3,
          body: [
            "A solicitud, puede obtener una copia de este Aviso, ya sea por correo electrónico o en formato impreso. Envíe su solicitud a:",
            "ClínicaRenova, LLC\n131 Continental Dr, Ste 305\nNewark, DE 19713\nhola@clinicarenova.org",
          ],
        },
        {
          heading: "VI. Fecha de Entrada en Vigor y Duración de Este Aviso",
          level: 3,
          body: [],
        },
        {
          heading: "A. Fecha de Entrada en Vigor.",
          level: 3,
          body: [
            "Este Aviso entra en vigor el 1 de enero de 2024.",
          ],
        },
        {
          heading: "B. Derecho a Modificar los Términos de Este Aviso.",
          level: 3,
          body: [
            "Podemos cambiar los términos de este Aviso en cualquier momento. Si lo modificamos, los nuevos términos pueden aplicarse a toda la Información de Salud Protegida que mantenemos, incluida cualquier información creada o recibida antes de la emisión del nuevo aviso. Si cambiamos este Aviso, publicaremos el nuevo aviso en nuestro sitio web en www.clinicarenova.org. También puede obtener cualquier aviso nuevo comunicándose con hola@clinicarenova.org.",
          ],
        },
        {
          heading: "VII. Oficial de Privacidad",
          level: 3,
          body: [
            "ClínicaRenova, LLC\n131 Continental Dr, Ste 305\nNewark, DE 19713\nhola@clinicarenova.org",
          ],
        },
        {
          heading: "Información de Contacto del Oficial de Protección de Datos",
          level: 3,
          body: [
            "Puede comunicarse con nuestro Oficial de Protección de Datos en:",
            "Per Hörbergs Väg 3\n164 50 Bromma\nSuecia\nTel: +46 705085085\nCorreo electrónico: johanwestin00@gmail.com",
          ],
        },
      ]}
    />
  );
}
