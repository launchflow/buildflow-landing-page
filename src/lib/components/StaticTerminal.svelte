<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import python from 'highlight.js/lib/languages/python';

	hljs.registerLanguage('python', python);

	let preRef: HTMLPreElement;

	const code0 = `  service = app.service("my-service")
  
  # Connect to cloud infrastructure
  postgres = CloudSQLDatabase(...)
  
  # Automatic infrastructure management
  app.manage(postgres)
  
  # Built-in dependency injection
  Postgres = DatabaseConnection(postgres)
  
  @service.endpoint("/read", method="GET")
  def read_user(request: ReadUser, db: Postgres):
      user = db.session.query(...)
      return user
      
  @service.endpoint("/read", method="POST")
  def create_user(request: CreateUser, db: Postgres):
      db.session.add(User(...))
      return {...}`;

	const code1 = `  # Connect to cloud infrastructure
  sqs = SQSQueue("signup-events")
  bigquery = BigQueryTable("project.dataset.analytics_table")

  # Automatic infrastructure management
  app.manage(sqs, bigquery)

  # Fine-grained autoscaling options
  options = {
    "num_concurrency": 10,
    "num_cpus": 0.5,  
    "min_replicas": 1,
    "max_replicas": 5,
  }

  @app.consumer(source=sqs, sink=bigquery, **options)
  def process_events(event: SignupEvent) -> Analytics:
      # Processing logic goes here
      return Analytics(...)
`;

	const code2 = `  # Connect to cloud infrastructure
  bucket = GCSBucket('model-weights')
  snowflake = SnowflakeTable('database.predictions_table')

  # Automatic infrastructure management
  app.manage(bucket, snowflake)

  # Create custom dependencies
  @dependency
  class ModelLoader:
    def __init__(self, storage: Bucket(bucket), model_path: str):
      model_weights = storage.download(model_path)
      self.model = load_model(model_weights)

    def predict(self, image: Image) -> Prediction:
      return self.model.predict(image)

  @app.collector("/", method="GET", sink=snowflake)
  def predict_images(request: Payload, model: ModelLoader(bucket, "model_path.h5")):
      return model.predict(Image.open(request.file))`;

	const codes = [code0, code1, code2];

	function highlightCode() {
		if (preRef) {
			hljs.highlightElement(preRef);
		}
	}

	import { onMount } from 'svelte';
	onMount(highlightCode);

	export let codeIndex = 0;
</script>

<div class="border border-white/20 rounded-xl overflow-hidden">
	<div class="flex py-3 px-4 space-x-3 bg-[#3A4259] border-b border-white/[0.05] rounded-t-xl">
		<div class="h-2 w-2 rounded-full bg-red-500 border border-white/20"></div>
		<div class="h-2 w-2 rounded-full bg-yellow-500 border border-white/20"></div>
		<div class="h-2 w-2 rounded-full bg-green-500 border border-white/20"></div>
	</div>
	<div class="px-0 bg-black">
		<pre
			bind:this={preRef}
			class="h-full mb-0 text-sm overflow-y-auto max-h-[600px]"> <!-- Adjust the max-height as needed -->
            <code class="python">
{codes[codeIndex]}
              </code>
          </pre>
	</div>
</div>
