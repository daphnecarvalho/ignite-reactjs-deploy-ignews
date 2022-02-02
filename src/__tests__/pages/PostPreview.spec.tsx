import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";

import { getPrismicClient } from "../../services/prismic";
import PostPreview, { getStaticProps } from "../../pages/posts/preview/[slug]";

const post = {
  slug: "my-new-post",
  title: "My new post",
  content: "<p>Post content</p>",
  updatedAt: "01 de abril de 2021",
};

jest.mock("next-auth/react");
jest.mock("next/router");

jest.mock("../../services/prismic");

describe("Post Preview page", () => {
  it("renders correctly", () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });

    render(<PostPreview post={post} />);

    expect(screen.getByText("My new post")).toBeInTheDocument();
    expect(screen.getByText("01 de abril de 2021")).toBeInTheDocument();
    expect(screen.getByText("Post content")).toBeInTheDocument();
    expect(screen.getByText("Wanna continue reading?")).toBeInTheDocument();
  });

  it("redirects user to full post when user is subscribed", async () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce({
      data: {
        activeSubscription: "fake-active-subscription",
      },
    } as any);

    const useRouterMocked = mocked(useRouter);

    const pushMock = jest.fn();

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any);

    render(<PostPreview post={post} />);

    expect(pushMock).toHaveBeenCalledWith(`/posts/${post.slug}`);
  });

  it("loads initial data", async () => {
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            {
              type: "heading",
              text: "My new post",
            },
          ],
          content: [
            {
              type: "paragraph",
              text: "Post content",
            },
          ],
        },
        last_publication_date: "04-01-2021",
      }),
    } as any);

    const response = await getStaticProps({
      params: {
        slug: "my-new-post",
      },
    });

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post,
        },
      })
    );
  });
});
