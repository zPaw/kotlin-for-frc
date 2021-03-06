export class OldCommandPIDSubsystemTemplate {
    text: string = `package #{PACKAGE}

import edu.wpi.first.wpilibj.command.PIDSubsystem

/**
 * Add your docs here.
 */
class #{NAME} : PIDSubsystem("#{NAME}", 1.0, 2.0, 3.0) {
    public override fun initDefaultCommand() {
        // Set the default command for a subsystem here.
        // setDefaultCommand(MySpecialCommand())
    }

    override fun returnPIDInput(): Double {
        // Return your input value for the PID loop
        // e.g. a sensor, like a potentiometer:
        // yourPot.getAverageVoltage() / kYourMaxVoltage
        return 0.0
    }

    override fun usePIDOutput(output: Double) {
        // Use output to drive your system, like a motor
        // e.g. yourMotor.set(output)
    }
}
`;
}
