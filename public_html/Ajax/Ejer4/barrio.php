<?php
$ciudad=$_POST["ciudad"];
switch ($ciudad) {
    case 1:
        $barrio = array('1' => 'ciudadB1', '2' => 'ciudadB2', '3' => 'ciudadB3', '4' => 'ciudadB4');
        echo json_encode($barrio);

        break;
    case 2:
        $barrio = array('1' => 'ciudadM1', '2' => 'ciudadM2', '3' => 'ciudadM3', '4' => 'ciudadM4');
        echo json_encode($barrio);

        break;
    case 3:
        $barrio = array('1' => 'ciudadS1', '2' => 'ciudadS2', '3' => 'ciudadS3', '4' => 'ciudadS4');
        echo json_encode($barrio);

        break;
    case 4:
        $barrio = array('1' => 'ciudadC2', '2' => 'ciudadC2', '3' => 'ciudadC3', '4' => 'ciudadC4');
        echo json_encode($barrio);
        break;
    default:
        break;
}
?>
