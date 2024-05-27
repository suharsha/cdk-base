
import { Stack, StackProps } from 'aws-cdk-lib';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class DatabaseStack extends Stack {
  public readonly studentTable: Table
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.studentTable = new Table(this, 'StudentTable', {
        partitionKey: {
          name: 'id',
          type: AttributeType.STRING,
        }
      });
  }
}
