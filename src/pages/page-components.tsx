import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import ButtonIcon from "../components/ui/Button-Icon";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Icon from "../components/ui/Icon";
import InputCheckbox from "../components/ui/Input-checkbox";
import InputText from "../components/ui/Input-text";
import Skeleton from "../components/ui/Skeleton";
import Text from "../components/ui/Text";

export default function PageComponents() {
  return (
    <Container>
		<div className="grid gap-6">
			<div className="flex flex-col gap-1">
				<Text variant="body-sm-bold" className="text-pink-base">
					Hello World!
				</Text>
				<Text className="text-pink-base">Hello World!</Text>
				<Text variant="body-md-bold" className="text-pink-base">
					Hello World!
				</Text>
			</div>

			<div className="flex gap-1">
				<Icon name="check" />
				<Icon name="x" />
				<Icon name="pencil" />
				<Icon name="spinner" animate />
				<Icon name="trash" />
				<Icon name="plus" />
			</div>

			<div className="flex gap-3">
				<Badge variant="primary">Primary</Badge>
				<Badge variant="secondary">Secondary</Badge>
				<Badge loading>Tertiary</Badge>
			</div>

			<div className="flex gap-3">
				<Button>Primary</Button>
				<Button disabled>Primary Disabled</Button>
				<Button icon="plus">Primary with Icon</Button>
				<Button icon="plus" handling>Primary with Icon</Button>
			</div>

			<div className="flex gap-3">
				<ButtonIcon icon="plus" />
				<ButtonIcon variant="secondary" icon="plus" />
				<ButtonIcon variant="tertiary" icon="plus" />
				<ButtonIcon disabled icon="plus" />
				<ButtonIcon variant="secondary" disabled icon="plus" />
				<ButtonIcon variant="tertiary" disabled icon="plus" />
				<ButtonIcon icon="plus" loading/>
				<ButtonIcon icon="plus" handling/>
			</div>

			<div className="flex gap-3">
				<InputText placeholder="Type something..." />
				<InputText placeholder="Disabled input" disabled />
				<InputText
					placeholder="Input with custom class"
					className="text-pink-base"
				/>
			</div>

			<div className="flex gap-3">
				<InputCheckbox />
				<InputCheckbox loading />
			</div>

			<div>
				<Card size="md">Hello, World!</Card>
			</div>

			<div className="flex flex-col gap-3">
				<Skeleton className="h-6" />
				<Skeleton className="h-6"/>
				<Skeleton className="w-96 h-6" />
			</div>
		</div>
		</Container>
  )
}