/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Oct 2025
 * This program is a self driveing car
*/

// variable
let distanceToObjest: number = 0

// setup
basic.showIcon(IconNames.Happy)

// moves the car forward forever
while (true) {
    // gets the distance
    distanceToObjest = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    if (distanceToObjest > 10) {
        robotbit.StpCarMove(5, 48)
        basic.pause(100)
    } else {
        robotbit.StpCarMove(-10, 48)
        robotbit.StepperDegree(robotbit.Steppers.M1, 90)
        robotbit.StepperDegree(robotbit.Steppers.M2, -90)
        basic.pause(100)
    }
}
