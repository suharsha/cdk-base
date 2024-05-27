
import { Stack, StackProps } from 'aws-cdk-lib';
import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

interface Props extends StackProps  {
   studentDdbTable: Table
}

export class ServiceStack extends Stack {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    new NodejsFunction(this, 'StudentSearchFn', {
        runtime: Runtime.NODEJS_20_X,
        handler: 'index.handler',
        entry: './service/student-search.ts',
        environment: {
          STUDENT_TABLE_ARN: props.studentDdbTable.tableArn
        }
      });
  }
}
