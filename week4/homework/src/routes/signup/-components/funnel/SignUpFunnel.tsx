import { Form } from '@layout';
import { useSignUpFunnel } from '../../-hooks/useSignUpFunnel';
import { SignUpLoginIdStep, SignUpPasswordStep, SignUpProfileStep } from '../steps';
import * as styles from './SignUpFunnel.css';

export const SignUpFunnel = () => {
  const { field, funnel, submission } = useSignUpFunnel();

  return (
    <Form className={styles.form} onSubmit={submission.submit}>
      <Form.Header title='SOPT MEMBERS' description='회원가입' />
      {funnel.currentStep === 'loginId' ? (
        <SignUpLoginIdStep
          register={field.register}
          errors={field.errors}
          disabled={submission.isPending}
          canGoNext={funnel.canGoPasswordStep}
          onNext={funnel.goPasswordStep}
        />
      ) : null}
      {funnel.currentStep === 'password' ? (
        <SignUpPasswordStep
          register={field.register}
          errors={field.errors}
          disabled={submission.isPending}
          canGoNext={funnel.canGoProfileStep}
          onPrev={funnel.goPrev}
          onNext={funnel.goProfileStep}
        />
      ) : null}
      {funnel.currentStep === 'profile' ? (
        <SignUpProfileStep
          register={field.register}
          errors={field.errors}
          disabled={submission.isPending}
          canSubmit={funnel.canSubmit}
          isSubmitting={submission.isPending}
          submitErrorMessage={submission.submitErrorMessage}
          onPrev={funnel.goPrev}
        />
      ) : null}
    </Form>
  );
};
