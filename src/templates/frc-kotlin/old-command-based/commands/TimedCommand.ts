export class OldCommandTimedCommandTemplate {
    text: string = `package #{PACKAGE}

import edu.wpi.first.wpilibj.command.TimedCommand

/**
 * Add your docs here.
 *
 * @param timeout
 */
class #{NAME}(timeout: Double) : TimedCommand(timeout) {
    // Called just before this Command runs the first time
    override fun initialize() {}

    // Called repeatedly when this Command is scheduled to run
    override fun execute() {}

    // Called once after timeout
    override fun end() {}

    // Called when another command which requires one or more of the same
    // subsystems is scheduled to run
    override fun interrupted() {}
}
`;
}
