export class SequentialCommandGroupTemplate {
    private useAtProjectConversion: boolean;
    private text: string;
    constructor() {
    this.useAtProjectConversion = false;
    this.text = `/*----------------------------------------------------------------------------*/
/* Copyright (c) 2019 FIRST. All Rights Reserved.                             */
/* Open Source Software - may be modified and shared by FRC teams. The code   */
/* must be accompanied by the FIRST BSD license file in the root directory of */
/* the project.                                                               */
/*----------------------------------------------------------------------------*/

package #{PACKAGE}

import edu.wpi.first.wpilibj2.command.SequentialCommandGroup

// NOTE:  Consider using this command inline, rather than writing a subclass.  For more
// information, see:
// https://docs.wpilib.org/en/latest/docs/software/commandbased/convenience-features.html
class #{NAME} : SequentialCommandGroup() {
  init {
    // Add your commands in the super() call, e.g.
    // super(FooCommand(), BarCommand())
    super()
  }
}
`;
  }
  
  public getText(): string {
    return this.text;
  }
  
  public useAtConversion(): boolean {
    return this.useAtProjectConversion;
  }
}