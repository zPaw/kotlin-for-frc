export class RomiCommandExampleCommandTemplate {
    text: string = `package frc.robot.commands

import edu.wpi.first.wpilibj2.command.CommandBase
import frc.robot.subsystems.RomiDrivetrain

/**
 * An example command that uses an example subsystem.
 *
 * @property subsystem
 */
class ExampleCommand(private val subsystem: RomiDrivetrain) : CommandBase() {
    init {
        // Use addRequirements() here to declare subsystem dependencies.
        addRequirements(subsystem)
    }

    // Called when the command is initially scheduled.
    override fun initialize() {}

    // Called every time the scheduler runs while the command is scheduled.
    override fun execute() {}

    // Called once the command ends or is interrupted.
    override fun end(interrupted: Boolean) {}

    // Returns true when the command should end.
    override fun isFinished(): Boolean {
        return false
    }
}
`;
}
